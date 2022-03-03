import { ContantType } from './contactType.enum';

/**
 * Контактные данные
 */
export interface IContant {
  /**
   * Тип контакта
   */
  type: ContantType;
  /**
   * Значение в зависимости от выбранного типа контакта
   */
  value: string;
}
