import { AxiosInstance, AxiosPromise } from 'axios';
import { APIClient } from './APIClient';
import {
  IGetTaskByIdResponseSuccess,
  IGetTasksResponseSuccess,
  ICreateTaskRequest,
  ICreateTaskResponseSuccess,
  TaskFilter,
} from '@interfaces';

/**
 * API для работы с задачами
 */
export class TaskAPIClient extends APIClient {
  constructor(axiosInstance: AxiosInstance) {
    super(axiosInstance);
  }

  /**
   * Получение задачи по ID
   * @param id - ID задачи
   * @returns {AxiosPromise<IGetTaskByIdResponseSuccess>}
   */
  getTaskById(id: string): AxiosPromise<IGetTaskByIdResponseSuccess> {
    return this.get(`tasks/${id}`);
  }

  /**
   * Получение всех задач
   * @returns {AxiosPromise<IGetTasksResponseSuccess>}
   */
  getTasks(filter: TaskFilter, applicationNumber?: string): AxiosPromise<IGetTasksResponseSuccess> {
    const query = new URLSearchParams({
      filter,
    });

    if (filter === TaskFilter.BY_APPLICATION) {
      if (!applicationNumber) {
        throw new Error('applicationNumber query parameter is missing, but by_application filter is set');
      }

      query.set('applicationNumber', applicationNumber);
    }

    return this.get(`tasks?${query}`);
  }

  /**
   * Назначение исполнителя на задачу
   * @param id - ID задачи
   * @param userId - ID пользователя-исполнителя
   * @returns {AxiosPromise<unknown>}
   */

  assignTask(id: string, userId: string): AxiosPromise<unknown> {
    return this.put(`tasks/${id}/assign?${new URLSearchParams({ userId })}`);
  }

  /**
   * Сброс исполнителя задачи
   * @param id - ID задачи
   * @returns {AxiosPromise<unknown>}
   */

  resetTask(id: string): AxiosPromise<unknown> {
    return this.put(`tasks/${id}/reset`);
  }

  /**
   * Завершение задачи
   * @param id - ID задачи
   * @param selectedActionCode - код выбранного решения
   * @returns {AxiosPromise<unknown>}
   */

  completeTask(id: string, selectedActionCode: string): AxiosPromise<unknown> {
    return this.put(`tasks/${id}/complete?${new URLSearchParams({ selectedActionCode })}`);
  }

  /**
   * Отмена задачи
   * @param id - ID задачи
   * @deprecated = не используется
   * @returns {AxiosPromise<unknown>}
   */

  cancelTask(id: string): AxiosPromise<unknown> {
    return this.put(`tasks/${id}/cancel`);
  }

  /**
   * Создание задачи
   * @param body - тело запроса (некоторая информация о заявке)
   * @deprecated - не используется
   * @returns {AxiosPromise<ICreateTaskResponseSuccess>}
   */

  createTask(body: ICreateTaskRequest): AxiosPromise<ICreateTaskResponseSuccess> {
    return this.post(`tasks`, body);
  }
}
