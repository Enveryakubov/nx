import { AxiosInstance, AxiosPromise } from 'axios';
import { IAccount, IAttribute } from '@interfaces';
import { APIClient } from './APIClient';

/**
 * API клиент для работы с данными пользовательского аккаунта
 */
export class AccountAPIClient extends APIClient {
  constructor(axiosInstance: AxiosInstance) {
    super(axiosInstance);
  }

  /**
   * Получение аккаунта пользователя по ID
   * @param accountId - ID пользователя, которого нужно получить
   * @param includeAttributes - флаг включения атрибутов
   * @param includeGroups - флаг включения груп
   * @param includeRoles - флаг включения ролей
   * @returns {AxiosPromise<IAccount>}
   */
  getAccountById(
    accountId: string,
    includeAttributes = false,
    includeGroups = false,
    includeRoles = false,
  ): AxiosPromise<IAccount> {
    return this.get(
      `accounts/${accountId}?${new URLSearchParams({
        includeAttributes: String(Boolean(includeAttributes)),
        includeGroups: String(Boolean(includeGroups)),
        includeRoles: String(Boolean(includeRoles)),
      })}`,
    );
  }

  /**
   * Получение всех пользователей
   * @param groupCode - имя группы пользователей
   * @param includeAttributes - флаг включения атрибутов
   * @param includeGroups - флаг включения груп
   * @param includeRoles - флаг включения ролей
   * @returns {AxiosPromise<Array<IAccount>>}
   */
  getAccounts(
    groupCode?: string,
    includeAttributes = false,
    includeGroups = false,
    includeRoles = false,
  ): AxiosPromise<Array<IAccount>> {
    const query = new URLSearchParams({
      includeAttributes: String(Boolean(includeAttributes)),
      includeGroups: String(Boolean(includeGroups)),
      includeRoles: String(Boolean(includeRoles)),
    });

    if (groupCode) {
      query.set('groupCode', groupCode);
    }

    return this.get(`accounts?${query}`);
  }

  /**
   * Добавление атрибутов пользователя
   * @param accountId - ID пользователя
   * @param body - массив атрибутов
   * @returns {AxiosPromise<unknown>}
   */
  addAttributes(accountId: string, body: Array<IAttribute>): AxiosPromise<unknown> {
    return this.put(`accounts/${accountId}/attributes`, body);
  }
}
