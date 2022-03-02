import { IComment } from './comment.interface';

/**
 * Тип объекта запроса создания комментария
 */
export interface IAddCommentRequest {
  /**
   * ID заявки
   * @path
   * @template UUID
   */
  id: string;
  /**
   * Тело запроса
   */
  body: Pick<IComment, 'messageText' | 'visibleGroups' | 'type'>;
}

/**
 * Тип успешного ответа создания комментария
 */
export type IAddCommentResponseSuccess = IComment;
