import { IAttribute } from './attribute.interface';

/**
 * Тип объекта запроса добавления пользовательских атрибутов
 */
export interface IAddAttributesRequest {
  /**
   * ID аккаунта
   * @path
   */
  accountId: string;
  /**
   * Тело запроса
   */
  body: Array<IAttribute>;
}
