import { IComment } from './comment.interface';

/**
 * Тип объекта запроса комментариев по заявке
 */
export interface IGetCommentsByApplicationIdRequest {
  /**
   * ID заявки
   * @path
   * @template UUID
   */
  id: string;
}

/**
 * Тип успешного ответа запроса комментариев по заявке
 */
export type IGetCommentsByApplicationIdResponseSuccess = Array<IComment>;
