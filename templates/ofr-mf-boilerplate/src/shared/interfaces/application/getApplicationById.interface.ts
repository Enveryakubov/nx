import { IApplication } from '.';

export interface IGetApplicationByIdRequest {
  id: string;
  enrichData?: boolean;
}

export type IGetApplicationByIdResponseSuccess = IApplication;
