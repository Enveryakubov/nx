/**
 * Канал поступления заявки
 */
export interface IChannel {
  /**
   * Название канала
   */
  name?: string;
  /**
   * ID пользователя, создавшего заявку
   */
  initiatorId?: string;
}
