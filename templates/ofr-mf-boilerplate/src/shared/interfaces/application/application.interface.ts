import { ICreditCard } from './creditCard.interface';
import { IContant } from './contact.interface';
import { IChannel } from './channel.interface';
import { IPerson } from './person.interface';

export interface IApplication {
  /**
   * Уникальный ID заявки
   */
  readonly id: string;
  /**
   * Дата создания
   * @template ГГГГ-ММ-ДД
   */
  readonly createDate: string;
  /**
   * Дата последнего обновления
   * @template ГГГГ-ММ-ДД
   */
  readonly lastUpdateDate: string;
  /**
   * Канал поступления заявки
   */
  readonly channel: IChannel;
  /**
   * Текущий статус заявки
   */
  readonly status: string;
  /**
   * Номер заявки
   */
  readonly number: string;
  /**
   * Участники заявки
   */
  participants: Array<IPerson>;
  /**
   * Запрашиваемый продукт
   */
  product: ICreditCard;
  /**
   * Дополнительные контактные данные
   */
  contacts?: Array<IContant>;
}
