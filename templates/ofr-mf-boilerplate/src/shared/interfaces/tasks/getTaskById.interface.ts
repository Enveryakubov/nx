import { ITask } from '.';

export type IGetTaskByIdResponseSuccess = ITask;

/**
 * Параметры запроса получения задачи по ID
 * @method GET
 */
export interface IGetTaskByIdRequest {
  /**
   * ID задачи
   * @template UUID
   * @path
   */
  id: string;
}
