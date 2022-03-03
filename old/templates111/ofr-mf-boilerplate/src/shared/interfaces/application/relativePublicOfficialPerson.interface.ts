import { IRelativePublicOfficialPersonInfo } from './relativePublicOfficialPersonInfo.interface';

/**
 * Информация о родстве с публичным должностным лицом
 */
export interface IRelativePublicOfficialPerson {
  /**
   * Да/нет
   */
  value: boolean;
  /**
   * Информация о родственнике
   */
  relativePublicOfficialPerson?: IRelativePublicOfficialPersonInfo;
}
