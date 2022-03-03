/**
 * Организация
 */
export interface ICompany {
  /**
   * Идентификатор организации
   */
  readonly id: string;
  /**
   * Наименование организации
   */
  name?: string;
  /**
   * ИНН организации
   */
  inn?: string;
  /**
   * Фактический адрес организации
   */
  factAddress?: string;
  /**
   * Сфера деятельности организации
   */
  activityScope?: string;
}
