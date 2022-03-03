/**
 * Доставка
 */
export interface IDelivery {
  /**
   * Адрес доставки
   */
  address: string;
  /**
   * Дата доставки
   * @template ГГГГ-ММ-ДД
   */
  date: string;
  /**
   * Интервал доставки
   */
  interval: {
    /**
     * Время начала интервала доставки
     * @template ^\d{2}:\d{2}$
     * @example 12:00
     */
    from: string;
    /**
     * Время завершения интервала доставки
     * @template ^\d{2}:\d{2}$
     * @example 13:00
     */
    to: string;
  };
}
