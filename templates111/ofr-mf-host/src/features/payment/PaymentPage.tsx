import React, { useEffect } from 'react';
/* tslint:disable-next-line */
// import MfePayment from 'ofr_mf_payment/Payment';
import { Stepbar } from 'src/shared/components/StepBar';
import { ErrorBoundary } from 'src/shared/components/ErrorBoundary';

const MfePayment = React.lazy(() => import('ofr_mf_payment/Payment'));

const PaymentPage = () => {
  return (
    <div>
      <Stepbar current={2} />
      <React.Suspense fallback={null}>
        <ErrorBoundary>
          <MfePayment />
        </ErrorBoundary>
      </React.Suspense>
    </div>
  );
};

export default PaymentPage;
