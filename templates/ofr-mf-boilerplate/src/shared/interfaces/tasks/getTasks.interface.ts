import { ITask, TaskFilter } from '.';

/**
 * Параметры запроса получения всех задач
 * @method GET
 */
export interface IGetTasksRequest {
  /**
   * Фильтр применяемый для поиска задач
   * @query
   */
  filter: TaskFilter;
  /**
   * Номер заявки
   * Обязателен для фильтра по заявке (filter=by_application)
   */
  applicationNumber?: string;
}

/**
 * Тип объекта успешного ответа
 */
export type IGetTasksResponseSuccess = Array<ITask>;
