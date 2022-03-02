/**
 * Описание иностранного налогового резидента
 */
export interface IForeignResident {
  /**
   * Да/нет
   */
  value: boolean;
  /**
   * Страна налогового резидентства
   */
  country?: string;
  /**
   * ИНН иностранного государства
   */
  inn?: string;
}
