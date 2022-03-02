import React, { useEffect } from 'react';

import { ApplicationsActions, ApplicationsSelectors } from '@data-access/applications';
import { UiButtonLink, UiContainer, UiGridItem } from '@ofr/ui-kit';
import { CommentsActions } from '@data-access/comments';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ParticipantCard from './Participant';
import CommentBlock from './CommentBlock';
import { Loader } from '@components';
import TaskBlock from './TaskBlock';
import { getPath } from '@routes';

import styles from './Applications.module.scss';

interface CurrentApplicationParams {
  id: string;
}

const ApplicationItem: React.FC = () => {
  const { id } = useParams<CurrentApplicationParams>();

  const dispatch = useDispatch();

  const currentApplication = useSelector(ApplicationsSelectors.getCurrentApplication);
  const isLoading = useSelector(ApplicationsSelectors.isCurrentApplicationLoading);
  const lastError = useSelector(ApplicationsSelectors.getLastErrorOnCurrentApplication);
  const borrowers = currentApplication?.participants.filter((person) => person.role === 'BORROWER');

  useEffect(() => {
    if (id) {
      dispatch(ApplicationsActions.getApplicationByIdAsync.request({ id, enrichData: true }));
    }

    return () => {
      dispatch(ApplicationsActions.clearCurrentApplication());
    };
  }, []);

  if (!id) {
    return <h1>Cannot receive application with ID: {id}</h1>;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (lastError?.message) {
    return (
      <>
        <h1>{lastError.message}</h1>
        {lastError?.error && <small>{lastError.error}</small>}
      </>
    );
  }

  if (!borrowers?.length) {
    return <h1>No borrowers on this application</h1>;
  }

  return (
    <div className={styles.application}>
      <h1>Просмотр заявки №{currentApplication?.number}</h1>
      <TaskBlock />
      <UiContainer columns={12}>
        <UiGridItem columns={10}>
          {borrowers?.map((borrower, i) => (
            <div>
              <h3>Заёмщик #{i + 1}</h3>
              <ParticipantCard key={borrower.id || `borrower-${i}`} participant={borrower} />
            </div>
          ))}
        </UiGridItem>
        <UiGridItem columns={{ start: 10, end: -1 }}>
          <CommentBlock />
        </UiGridItem>
      </UiContainer>
      <div className={styles.app__footer}>
        <Link to={getPath('applications')} component={UiButtonLink}>
          К заявкам
        </Link>
      </div>
    </div>
  );
};

export default ApplicationItem;
