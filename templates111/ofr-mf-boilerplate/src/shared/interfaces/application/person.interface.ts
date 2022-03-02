import { IQuestionnaire } from './questionnaire.interface';
import { ParticipantType } from './participantType.enum';
import { ParticipantRole } from './participantRole.enum';
import { IIdentityDoc } from './identityDoc.interface';
import { IOccupation } from './occupation.interface';
import { IContant } from './contact.interface';
import { PersonGender } from './gender.enum';

/**
 * Участник заявки
 */
export interface IPerson {
  /**
   * ID участника
   * @template UUID
   */
  readonly id: string;
  /**
   * Тип участника
   */
  type: ParticipantType;
  /**
   * Роль участника
   */
  role: ParticipantRole;
  /**
   * Наименование участника для отображения на формах
   */
  displayName: string;
  /**
   * Имя
   */
  firstName: string;
  /**
   * Фамилия
   */
  lastName: string;
  /**
   * Отчество
   */
  secondName: string;
  /**
   * Мобильный номер телефона
   */
  phone: string;
  /**
   * Электронная почта
   */
  email?: string;
  /**
   * Дата рождения
   * @template ГГГГ-ММ-ДД
   */
  dateOfBirth?: string;
  /**
   * Место рождения
   */
  placeOfBirth?: string;
  /**
   * Пол
   */
  gender?: PersonGender;
  /**
   * ИНН
   * @description Имеет фиксированную длину в 12 символов
   */
  inn?: string;
  /**
   * СНИЛС
   */
  snils?: string;
  /**
   * Документ, удостоверящий личность
   */
  identityDoc?: IIdentityDoc;
  /**
   * Адрес постоянной регистрации
   */
  regAddress?: string;
  /**
   * Фактический адрес проживания
   */
  factAddress?: string;
  /**
   * Информация о работе
   */
  occupation?: IOccupation;
  /**
   * Анкета участника
   */
  questionnaire?: IQuestionnaire;
}
