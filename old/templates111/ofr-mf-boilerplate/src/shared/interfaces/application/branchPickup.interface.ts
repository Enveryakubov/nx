import { BranchPickupType } from './branchPickupType.enum';

/**
 * Получение продукта в отделении банка
 */
export interface IBranchPickup {
  /**
   * Отделение банка
   */
  branchName: BranchPickupType;
}
