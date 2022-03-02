import { ITask } from '.';
import { WritableKeys } from '..';

/**
 * Параметры запроса создания задачи
 * @method POST
 */
export type ICreateTaskRequest = Omit<
  Pick<ITask, WritableKeys<ITask> | 'candidateUserId'>,
  'selectedActionCode'
>;

/**
 * Интерфейс объекта успешного ответа создания задачи
 */
export interface ICreateTaskResponseSuccess {
  /**
   * ID задачи
   * @template UUID
   */
  id: string;
}
