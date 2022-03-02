import React from 'react';
// import MfeProductList from 'ofr_mf_programList/ProductList';
import { Stepbar } from 'src/shared/components/StepBar';
import { ErrorBoundary } from 'src/shared/components/ErrorBoundary';

const MfeProductList = React.lazy(() => import('ofr_mf_program_list/ProductList'));

const ProductList = () => {
  return (
    <div>
      <Stepbar current={0} />
      <React.Suspense fallback={null}>
        <ErrorBoundary>
          <MfeProductList />
        </ErrorBoundary>
      </React.Suspense>
    </div>
  );
};

export default ProductList;
