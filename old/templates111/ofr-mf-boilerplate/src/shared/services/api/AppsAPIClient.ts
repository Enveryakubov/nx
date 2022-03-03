import { AxiosInstance, AxiosPromise } from 'axios';
import { APIClient } from './APIClient';
import {
  IApplication,
  ICreateApplicationRequest,
  ICreateApplicationResponseSuccess,
  IShortAppication,
} from '@interfaces';

/**
 * API клиент для работы с заявками
 */
export class AppsAPIClient extends APIClient {
  constructor(axiosInstance: AxiosInstance) {
    super(axiosInstance);
  }

  /**
   * Получение заявки по ID
   * @param id - ID заявки, которую нужно получить
   * @param enrichData - флаг обогащения данных
   * @returns {AxiosPromise<IApplication>}
   */
  getApplicationById(id: string, enrichData = false): AxiosPromise<IApplication> {
    return this.get(
      `mlc/api/v1/applications/${id}?${new URLSearchParams({ enrichData: String(Boolean(enrichData)) })}`,
    );
  }

  /**
   * Получение всех заявок
   * @param enrichData - флаг обогащения данных
   * @returns {AxiosPromise<Array<IApplication>>}
   */
  getApplications(enrichData = false): AxiosPromise<Array<IShortAppication>> {
    return this.get(`mlc/api/v1/applications?${new URLSearchParams({ enrichData: String(Boolean(enrichData)) })}`);
  }

  /**
   * Создание заявки
   * @param body - тело запроса (заявка)
   * @returns {AxiosPromise<ICreateApplicationResponseSuccess>}
   */

  createApplication(body: ICreateApplicationRequest): AxiosPromise<ICreateApplicationResponseSuccess> {
    return this.post('mlc/api/v1/applications', body);
  }
}
