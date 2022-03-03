/**
 * Документ, удостоверяющий личность
 */
export interface IIdentityDoc {
  /**
   * Тип документа
   * @description Возможно, будет не только паспорт
   */
  type: 'PASSPORT';
  /**
   * Серия
   */
  series: string;
  /**
   * Номер
   */
  number: string;
  /**
   * Дата выдачи
   * @template ГГГГ-ММ-ДД
   */
  issueDate: string;
  /**
   * Код подразделения
   */
  departCode: string;
  /**
   * Кем выдан
   */
  issuedBy: string;
}
