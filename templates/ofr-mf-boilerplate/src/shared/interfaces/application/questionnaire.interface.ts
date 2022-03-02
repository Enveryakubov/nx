import { CreditLoad } from './creditLoad.enum';
import { IForeignResident } from './foreignResident.interface';
import { IOfficialPerson } from './officialPerson.interface';
import { IRelativeForeignOfficialPerson } from './relativeForeignOfficialPerson.interface';
import { IRelativePublicOfficialPerson } from './relativePublicOfficialPerson.interface';
import { MainSourceIncome } from './sourceIncome.enum';

/**
 * Анкета участника
 */
export interface IQuestionnaire {
  /**
   * Ознакомление участника с условиями обработки персональных данных и согласие на запрос данных в Бюро кредитных историй
   */
  acceptPersonalInfoAndBki?: boolean;
  /**
   * Согласие участника о получении информации о специальных предложениях и услугах МТС Банка по СМС и электронной почте
   */
  acceptPromoOffersNotif?: boolean;
  /**
   * Отношение участника к публичному должностному лицу
   */
  officialPerson?: IOfficialPerson;
  /**
   * Наличие неисполненных договорных обязательств или незакрытых кредитов
   */
  creditLoad?: CreditLoad;
  /**
   * Сведения о деловой репутации участников
   */
  businessReputation?: string;
  /**
   * Основной источник дохода участника
   */
  mainSourceIncome?: MainSourceIncome;
  /**
   * Основная цель использования банковского счёта
   */
  purposeAccount?: string;
  /**
   * Является ли участник налогоплательщиком США
   */
  isUsaTaxPayer?: boolean;
  /**
   * Описание иностранного налогового резиндента
   */
  isForeignResident?: IForeignResident;
}
