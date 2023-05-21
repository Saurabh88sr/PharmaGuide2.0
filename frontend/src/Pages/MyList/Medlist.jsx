import React from 'react';

const Medlist = ({ medicineItems, handleSave }) => (
  <div>
    <h2>All Medicines</h2>
    {medicineItems.map((medicine) => (
      <div key={medicine.name}>
        <h3>{medicine.name}</h3>
        <p>Quantity: {medicine.quantity}</p>
        {/* Render other medicine details */}
        <button onClick={() => handleSave(medicine.name)}>
          {medicine.isSaved ? 'Unsave' : 'Save'}
        </button>
      </div>
    ))}
  </div>
);

export default Medlist;
