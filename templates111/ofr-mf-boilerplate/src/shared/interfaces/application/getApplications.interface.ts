import { IShortAppication } from '.';

export interface IGetApplicationsRequest {
  enrichData?: boolean;
}

export type IGetApplicationsResponseSuccess = Array<IShortAppication>;
