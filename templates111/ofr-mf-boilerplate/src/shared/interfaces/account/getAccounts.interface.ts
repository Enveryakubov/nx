import { IAccount } from '.';

/**
 * Тип объекта запроса всех пользователей
 */
export interface IGetAccountsRequest {
  /**
   * Группа пользователей
   * Если не указана, вернёт всех, иначе пользователей конкретной группы
   * @query
   */
  groupCode?: string;
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
 * Тип успешного ответа запроса всех пользователей
 */
export type IGetAccountsResponseSuccess = Array<IAccount>;
