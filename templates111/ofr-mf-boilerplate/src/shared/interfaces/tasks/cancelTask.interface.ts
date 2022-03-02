/**
 * Параметры запроса отмены задачи
 * @method PUT
 */
export interface ICancelTaskRequest {
  /**
   * ID задачи
   * @template UUID
   * @path
   */
  id: string;
}
