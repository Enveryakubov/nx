import { IAddCommentRequest, IComment } from '@interfaces';
import { AxiosInstance, AxiosPromise } from 'axios';
import { APIClient } from './APIClient';

/**
 * API клиент для работы с комментариями
 */
export class CommentsAPIClient extends APIClient {
  constructor(axiosInstance: AxiosInstance) {
    super(axiosInstance);
  }

  /**
   * Получение комментариев по заявке
   * @param applicationId - ID заявке
   * @returns {AxiosPromise<Array<IComment>>}
   */
  getComments(applicationId: string): AxiosPromise<Array<IComment>> {
    return this.get(`applications/${applicationId}/comments`);
  }

  /**
   * Добавление комментария в заявку
   * @param applicationId - ID заявки
   * @param body - тело запроса
   * @returns {AxiosPromise<IComment>}
   */
  addComment(applicationId: string, body: IAddCommentRequest['body']): AxiosPromise<IComment> {
    return this.post(`applications/${applicationId}/comments`, body);
  }
}
