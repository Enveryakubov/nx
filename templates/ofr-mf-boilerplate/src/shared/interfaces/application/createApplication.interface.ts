import { IContant, IPerson, WritableKeys } from '@interfaces';
import { IApplication, ICreditCard } from '.';

type ICreateApplicationPerson = Pick<
  IPerson,
  | 'type'
  | 'role'
  | 'firstName'
  | 'lastName'
  | 'secondName'
  | 'phone'
  | 'email'
  | 'dateOfBirth'
  | 'placeOfBirth'
  | 'gender'
  | 'inn'
  | 'snils'
  | 'identityDoc'
  | 'regAddress'
  | 'factAddress'
  | 'occupation'
  | 'questionnaire'
>;

type ICreateApplicationProduct = Pick<ICreditCard, WritableKeys<ICreditCard>>;

export interface ICreateApplicationRequest {
  participants: Array<ICreateApplicationPerson>;
  product: ICreateApplicationProduct;
  contacts?: Array<IContant>;
}

export interface ICreateApplicationResponseSuccess {
  /**
   * ID созданной заявки
   * @template int64
   */
  id: number;
  /**
   * Номер заявки
   */
  number: string;
  /**
   * Статус заявки
   */
  status: string;
}
