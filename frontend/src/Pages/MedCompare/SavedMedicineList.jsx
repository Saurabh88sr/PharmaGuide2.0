import React from 'react';

const SavedMedicineList = ({ savedMedicines }) => (
  <div>
    <h2>Saved Medicines</h2>
    {savedMedicines.length === 0 ? (
      <p>No saved medicines yet.</p>
    ) : (
      savedMedicines.map((medicine) => (
        <div key={medicine.name}>
          <h3>{medicine.name}</h3>
          <p>Quantity: {medicine.quantity}</p>
          {/* Render other medicine details */}
        </div>
      ))
    )}
  </div>
);

export default SavedMedicineList;
