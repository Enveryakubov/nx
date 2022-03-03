import { IAccount } from '.';

/**
 * Интерфейс объекта запроса пользователя по ID
 */
export interface IGetAccountByIdRequest {
  /**
   * ID пользователя
   * @path
   */
  accountId: string;
  /**
   * Флаг включения атрибутов
   */
  includeAttributes?: boolean;
  /**
   * Флаг включения групп
   */
  includeGroups?: boolean;
  /**
   * Флаг включения ролей
   */
  includeRoles?: boolean;
}

/**
 * Тип объекта успешного ответа получения пользователя по ID
 */
export type IGetAccountByIdResponseSuccess = IAccount;
