import React, { useCallback, useEffect } from 'react';

import { UiButton, UiComment, UiTextarea } from '@ofr/ui-kit/';
import { Controller, UnpackNestedValue, useForm } from 'react-hook-form';
import { AccountsSelectors } from '@data-access/accounts';
import { CommentsActions, CommentsSelectors } from '@data-access/comments';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { CommentType, IComment } from '@interfaces';
import { useParams } from 'react-router-dom';
import { yupFactory } from '@services';

import styles from './CommentBlock.module.scss';

interface CommentRoute {
  id: string;
}

interface CommentRules {
  text: string;
}

const yup = yupFactory().makeLocalizedYup();
const commentRules = yup.object().shape({
  text: yup.string().required(),
});

const CommentBlock: React.FC = () => {
  const { id } = useParams<CommentRoute>();

  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm<CommentRules>({
    resolver: yupResolver(commentRules),
  });

  const user = useSelector(AccountsSelectors.getCurrentAccount);
  const comments = useSelector(CommentsSelectors.getCommentsData);

  const sendComment = useCallback((data: UnpackNestedValue<CommentRules>) => {
    const { text } = data;

    dispatch(
      CommentsActions.addCommentAsync.request({
        id,
        body: {
          messageText: text,
          visibleGroups: [],
          type: CommentType.USER,
        },
      }),
    );
  }, []);

  useEffect(() => {
    dispatch(CommentsActions.getCommentsByApplicationIdAsync.request({ id }));

    return () => {
      dispatch(CommentsActions.clearComments());
    };
  }, []);

  return (
    <>
      <div className={styles['comments-block__editor-container']}>
        <Controller
          name="text"
          control={control}
          render={({ field, fieldState }) => (
            <UiTextarea
              className={styles['comments-block__editor-container__editor']}
              placeholder="Оставьте комментарий к заявке"
              {...field}
              {...fieldState}
            />
          )}
        />
        <UiButton onClick={handleSubmit(sendComment, console.error)}>
          {user ? `Отправить как ${user.lastName} ${user.firstName}` : 'Отправить'}
        </UiButton>
      </div>
      <div className={styles['comments-block__list']}>
        <div className={styles['comments-block__list__wrapper']}>
          {comments.map((comment, i) => (
            <UiComment
              className={styles['comments-block__list__comment']}
              key={`${comment.id}-${i}`}
              content={comment.messageText}
              author={`${comment.authorLastName} ${comment.authorFirstName}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CommentBlock;
