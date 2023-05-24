import React from 'react';
import SavedMedicinePage from '../MedCompare/SavedMedicinePage';

const Medlist = ({ medicineItems, handleSave }) => (
  <div>
    <h2 className='p-3'>All Medicines</h2>
    <SavedMedicinePage/>
 
  </div>
);

export default Medlist;
