import { OfficialPersonType } from './officialPersonType.enum';
import { RelationDegree } from './relationDegree.enum';
import { RelationType } from './relationType.enum';

export interface IOfficialPerson {
  /**
   * Отношение участника к публичному должностному лицу и/или иностранному публичному должностному лицу
   */
  isRelOfficialPerson?: boolean;
  /**
   * Тип публичного должностного лица
   */
  officialPersonType?: OfficialPersonType;
  /**
   * Характер отношений с МТС банком
   */
  mtsBankRelation?: RelationType;
  /**
   * Описание характера отношений с МТС банком
   */
  mtsBankRelationDescription?: string;
  /**
   * Степень родства
   */
  relationDegree?: RelationDegree;
  /**
   * ФИО родственнка
   */
  relativeFIO?: string;
  /**
   * Должность родственника
   */
  relativePosition?: string;
}
