import { AxiosInstance, AxiosPromise } from 'axios';
import { APIClient } from './APIClient';
import {
  IGenerateDocRequestBody,
  IGenerateDocResponseSuccess,
  ISaveDocRequestBody,
  ISaveDocResponseSuccess,
} from '@interfaces';

/**
 * API для работы с документами
 */
export class DocsAPIClient extends APIClient {
  constructor(axiosInstance: AxiosInstance) {
    super(axiosInstance);
  }

  /**
   * Формирование документа по шаблону
   * @param templateName - название шаблона
   * @param format - формат документа
   * @param body - тело запроса (необходимые для сервиса генерации документов данные)
   * @returns {AxiosPromise<IGenerateDocResponseSuccess | ''>} сгенерированный документ
   */

  generateDoc(
    templateName: string,
    format: 'HTML' | 'PDF',
    body: IGenerateDocRequestBody,
  ): AxiosPromise<IGenerateDocResponseSuccess | ''> {
    return this.post(`doc-template/${templateName}/generate?${new URLSearchParams({ format })}`, body);
  }

  /**
   * Сохранение документа по шаблону
   * @param templateName - название шаблона
   * @param format - формат документа
   * @param body - тело запроса (необходимые для сервиса генерации документов данные)
   * @returns {AxiosPromise<ISaveDocResponseSuccess | ''>} ID сохранённого документа
   */

  saveDoc(
    templateName: string,
    format: 'HTML' | 'PDF',
    body: ISaveDocRequestBody,
  ): AxiosPromise<ISaveDocResponseSuccess | ''> {
    return this.post(`doc-template/${templateName}/save?${new URLSearchParams(format)}`, body);
  }
}
