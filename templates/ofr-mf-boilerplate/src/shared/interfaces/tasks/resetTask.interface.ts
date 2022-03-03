/**
 * Параметры запроса сброса исполнителя задачи
 * @method PUT
 */
export interface IResetTaskRequest {
  /**
   * ID задачи
   * @template UUID
   * @path
   */
  id: string;
}
