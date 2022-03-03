import { IBranchPickup } from './branchPickup.interface';
import { DeliveryType } from './deliveryType.enum';
import { IDelivery } from './delivery.interface';
import { ProductType } from './productType.enum';

type ReceiveType = {
  type: DeliveryType;
} & (IDelivery | IBranchPickup);

/**
 * Продукт кредитной карты
 */
export interface ICreditCard {
  /**
   * ID продукта
   * @template UUID
   */
  readonly id: string;
  /**
   * Тип продукта
   */
  productType: ProductType;
  /**
   * Запрашиваемый лимит кредитной карты
   * @description Дробное
   */
  limit: number;
  /**
   * Кодовое слово
   */
  codeword: string;
  /**
   * Способ получения продукта
   */
  receive: ReceiveType;
}
