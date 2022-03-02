/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import { AppConfig } from '@config';

type AxiosInstanceInterceptors = Parameters<AxiosInstance['interceptors']['request']['use']>;
type AxiosInstanceFullfilledInterceptor = AxiosInstanceInterceptors[0];
type AxiosInstanceRejectedInterceptor = AxiosInstanceInterceptors[1];

type AxiosMockResponse = [number, any, Record<string, any>];
type AxiosMocker = (config: AxiosRequestConfig) => AxiosMockResponse | Promise<AxiosMockResponse>;

/**
 * Абстрация API клиента
 */
export class APIClient {
  private readonly baseURL = `${AppConfig['APP_API_HOST']}:${AppConfig['APP_API_PORT']}`;
  private interceptors: Array<[number, string]> = [];

  protected readonly axiosInstance!: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  /**
   * Функция добавления функции-перехватчика запроса для Axios
   * @param onFullfilled - функция-обработчик запроса до его отправки на сервер
   * @param onRejected  - функция-обработчик запроса после отправки запроса при возникновении ошибки
   * @returns {this}
   */
  addInterceptor(
    name: string,
    onFullfilled: AxiosInstanceFullfilledInterceptor,
    onRejected: AxiosInstanceRejectedInterceptor,
  ): this {
    const interceptor = this.axiosInstance.interceptors.request.use(onFullfilled, onRejected);

    this.interceptors.push([interceptor, name]);

    return this;
  }

  /**
   * Функция добавления моков для Axios
   * @deprecated
   * @see https://github.com/ctimmerm/axios-mock-adapter/issues/116
   * @param method - HTTP метод
   * @param matcher - функция-фильтратор сетевых запросов
   * @param mock - заготовленный ответ или функция, возвращающая его
   * @returns {this}
   */

  addMock(method: 'GET' | 'POST' | 'PUT', matcher: string | RegExp, mock: Record<string, any> | AxiosMocker): this {
    const mockCallback =
      typeof mock === 'object'
        ? function (): AxiosMockResponse {
            return [200, mock, {}];
          }
        : mock;

    switch (method) {
      case 'GET': {
        // this.axiosMockInstance.onGet(matcher).reply(mockCallback);
        break;
      }
      case 'POST': {
        // this.axiosMockInstance.onPost(matcher).reply(mockCallback);
        break;
      }
      case 'PUT': {
        // this.axiosMockInstance.onPut(matcher).reply(mockCallback);
        break;
      }
      default: {
        // this.axiosMockInstance.onAny(matcher).reply(mockCallback);
        break;
      }
    }

    return this;
  }

  /**
   * Абстракция GET запросов для axiosInstance
   * @param url - URL запроса
   * @param options - дополнительные опции
   * @returns {AxiosPromise<any>}
   */

  get(url: string, options?: AxiosRequestConfig): AxiosPromise<any> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.axiosInstance.get(this.axiosInstance.defaults.baseURL ? url : `${this.baseURL}/${url}`, options);
  }

  /**
   * Абстракция POST запросов для axiosInstance
   * @param url - URL запроса
   * @param data - тело запроса
   * @param options - дополнительные опции
   * @returns {AxiosPromise<any>}
   */

  post(url: string, data?: Record<string, any>, options?: AxiosRequestConfig): AxiosPromise<any> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.axiosInstance.post(this.axiosInstance.defaults.baseURL ? url : `${this.baseURL}/${url}`, data, options);
  }

  /**
   * Абстракция PUT запросов для axiosInstance
   * @param url - URL запроса
   * @param data - тело запроса
   * @param options - дополнительные опции
   * @returns {AxiosPromise<any>}
   */

  put(url: string, data?: Record<string, any>, options?: AxiosRequestConfig): AxiosPromise<any> {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.axiosInstance.put(this.axiosInstance.defaults.baseURL ? url : `${this.baseURL}/${url}`, data, options);
  }
}
