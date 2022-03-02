/**
 * Исполнитель
 */
export interface IExecutor {
  /**
   * @template UUID
   */
  readonly id?: string;
  /**
   * ID пользователя
   */
  readonly userId?: string;
  /**
   * Дата и время назначения задачи на исполнителя
   * @template ГГГГ-ММ-ДДTЧЧ:мм:СС.мс
   * @example 2021-11-12T15:06:31.405259500
   */
  readonly startDate?: string;
  /**
   * Дата и время окончания работы исполнителя с задачей
   * @template ГГГГ-ММ-ДДTЧЧ:мм:СС.мс
   * @example 2021-11-12T15:06:31.405259500
   */
  readonly endDate?: string;
}
