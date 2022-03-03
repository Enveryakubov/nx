import { IApplication, BranchPickupType } from '@interfaces';

export const getTaskByIdMockUnriched: IApplication = {
  channel: {
    initiatorId: '123',
    name: 'mock',
  },
  createDate: '2021-11-16',
  id: '123',
  lastUpdateDate: '2021-11-16',
  number: '123',
  participants: [],
  product: {
    codeword: 'mock',
    delivery: {
      branchName: BranchPickupType.BRANCH1,
    },
    id: '123',
    limit: 999999.999,
    productType: 'ULTRA CREDIT CARD',
  },
  status: 'CREATED',
};
