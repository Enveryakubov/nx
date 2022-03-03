import { ICompany } from './company.interface';
import { OccupationType } from './occupationType.enum';

/**
 * Информация о работе
 */
export interface IOccupation {
  /**
   * Тип занятости
   */
  type: OccupationType;
  /**
   * Организация
   */
  company?: ICompany;
}
