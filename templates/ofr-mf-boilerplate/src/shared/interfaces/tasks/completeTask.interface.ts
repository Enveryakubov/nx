/**
 * Параметры запроса выполнения задачи
 * @method PUT
 */
export interface ICompleteTaskRequest {
  /**
   * ID задачи
   * @template UUID
   * @path
   */
  id: string;
  /**
   * Код выбранного решения
   * @query
   */
  selectedActionCode: string;
}
