import type { CommentType } from './commentType.enum';

export interface IComment {
  /**
   * ID комментария
   * @template UUID
   */
  readonly id: string;
  /**
   * Текст сообщения
   */
  messageText: string;
  /**
   * ID автора
   */
  readonly authorId?: string;
  /**
   * Имя автора
   */
  readonly authorFirstName?: string;
  /**
   * Фамилия автора
   */
  readonly authorLastName?: string;
  /**
   * Группы, для которых виден комментарий
   */
  visibleGroups?: Array<string>;
  /**
   * Дата и время создания
   * @template ГГГГ-ММ-ДДTЧЧ:мм:СС.мс
   * @example 2021-11-12T15:06:31.405259500
   */
  readonly createDate: string;
  /**
   * Дата и время последнего обновления
   * @template ГГГГ-ММ-ДДTЧЧ:мм:СС.мс
   * @example 2021-11-12T15:06:31.405259500
   */
  readonly lastUpdateDate?: string | null;
  /**
   * Тип комментария
   */
  type: CommentType;
}
