/**
 * Параметры запроса назначения исполнителя
 * @method PUT
 */
export interface IAssignTaskRequest {
  /**
   * ID задачи
   * @template UUID
   * @path
   */
  id: string;
  /**
   * ID пользователя-исполнителя
   * @query
   */
  userId: string;
}
