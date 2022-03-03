/**
 * Параметры запроса сохранения документа: тело запроса
 */
export interface ISaveDocRequestBody {
  'person.client.firstName': string;
  'person.client.lastName': string;
  'person.client.document.series': string;
  'person.client.document.number': string;
}

/**
 * Параметры запроса сохранения документа
 * @method POST
 * @linkcode HOST:PORT/mlc/api/v1/doc-template/templateName/generate
 * @summary Метод формирует документ по шаблону и возвращает ID сохранённого документа
 */
export interface ISaveDocRequest {
  templateName: string;
  format: 'HTML' | 'PDF';
  requestBody: ISaveDocRequestBody;
}

/**
 * Интерфейс объекта успешного ответа сохранения документа
 */
export interface ISaveDocResponseSuccess {
  /**
   * ID документа
   * @template UUID
   */
  id: string;
}
