import { RelationType } from './relationType.enum';

export interface IRelativePublicOfficialPersonInfo {
  /**
   * Степень родства
   */
  relationDegree?: RelationType;
  /**
   * ФИО родственника
   */
  relativeFIO?: string;
  /**
   * Должность родственника
   */
  relativePosition?: string;
}
