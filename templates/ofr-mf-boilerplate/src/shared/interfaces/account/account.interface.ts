import { IAttribute, IGroup, IRole } from '.';

export interface IAccount {
  readonly id: string;
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  attributes?: Array<IAttribute>;
  groups?: Array<IGroup>;
  roles?: Array<IRole>;
}
