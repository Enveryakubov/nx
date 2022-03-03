// /* eslint-disable import/no-unused-modules */
// declare module 'AlppOnbrAsUi/Calculator' {
//   import React from 'react';

//   import { LayoutInfo } from '@vtb/ui-kit/adaptive/atoms/layout/typesLayout';

//   import { AppColorsMode } from '@utils/appTheme';
//   import { SetColorsMode } from '@utils/appTheme/AppTheme/types';
//   import { AppPalette } from '@utils/appTheme/constants';

//   interface ThemeData {
//     theme: { breakpoints: any; colors: AppPalette };
//     values: { theme: { colorsMode: AppColorsMode }; setColorsMode: SetColorsMode };
//   }

//   export interface CalculationData {
//     themeData: ThemeData;
//     successfullySaved: (flag: boolean) => void;
//     successfulResults: (flag: boolean) => void;
//     defaultParams?: any;
//     disabled: boolean;
//     save: boolean;
//     layoutInfo: LayoutInfo;
//   }

//   const Calculation: React.ComponentType<CalculationData>;

//   export default Calculation;
// }

declare module 'ofr_mf_applications/Applications' {
  // export interface InsuranceType {
  //   monthlyPayment: number;
  //   premium: number;
  // }

  // export interface InsurancesType {
  //   lifeInsurance?: InsuranceType;
  //   vtbCasko?: InsuranceType;
  // }

  // export interface LoanCalculationType {
  //   monthlyPayment: number;
  //   rate: number;
  //   loanAmount: number;
  //   loanTerm: string;
  //   insurances: InsurancesType;
  // }

  // export interface Summary {
  //   themeData: ThemeData;
  //   layoutInfo: LayoutInfo;
  //   calculationResults: LoanCalculationType;
  // }

  // const Summary: React.ComponentType<Summary>;

  export default Applications;
}

// declare module 'ofr_mf_tasks/Tasks' {
//   export default Tasks;
// }
declare module 'ofr_mf_program_list/ProductList' {
  export default ProductList;
}
declare module 'ofr_mf_contacts/Contacts' {
  export default Contacts;
}
declare module 'ofr_mf_payment/Payment' {
  export default Payment;
}
