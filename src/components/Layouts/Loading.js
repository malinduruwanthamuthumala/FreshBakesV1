import React from 'react';
import { MDBSpinner, MDBBtn } from 'mdb-react-ui-kit';

export default function Loading() {
  return (
    <>
      <MDBBtn disabled className='me-2'>
        <MDBSpinner grow size='sm' role='status' tag='span' />
        <span className='visually-hidden'>Loading...</span>
      </MDBBtn>

      <MDBBtn disabled>
        <MDBSpinner grow size='sm' role='status' tag='span' className='me-2' />
        Loading...
      </MDBBtn>
    </>
  );
}