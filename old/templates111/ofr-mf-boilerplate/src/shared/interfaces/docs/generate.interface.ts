/**
 * Параметры запроса генерации документа: тело запроса
 */
export interface IGenerateDocRequestBody {
  'person.client.firstName': string;
  'person.client.lastName': string;
  'person.client.document.series': string;
  'person.client.document.number': string;
}

/**
 * Параметры запроса генерации документа
 * @method POST
 * @summary Метод формирует документ по шаблону
 */
export interface IGenerateDocRequest {
  templateName: string;
  format: 'HTML' | 'PDF';
  requestBody: IGenerateDocRequestBody;
}

/**
 * Тип успешного ответа генерации документа
 */
export type IGenerateDocResponseSuccess = string;
