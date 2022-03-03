import React from 'react';
/* tslint:disable-next-line */
// import MfeContacts from 'ofr_mf_contacts/Contacts';
import { Stepbar } from 'src/shared/components/StepBar';
import { ErrorBoundary } from 'src/shared/components/ErrorBoundary';

const MfeContacts = React.lazy(() => import('ofr_mf_contacts/Contacts'));

const GetContacts = () => {
  return (
    <div>
      <Stepbar current={1} />
      <React.Suspense fallback={null}>
        <ErrorBoundary>
          <MfeContacts />
        </ErrorBoundary>
      </React.Suspense>
    </div>
  );
};

export default GetContacts;
