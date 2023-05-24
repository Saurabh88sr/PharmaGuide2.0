import React from "react";
import { getSavedMedicine } from "./savedMedicine";
import MedCardInfo from "./MedCardInfo";

const SavedMedicinePage = () => {
  const savedMedicine = getSavedMedicine();

  return (
    <div>
      <h2>Saved Medicine</h2>
      {savedMedicine.length > 0 ? (
        <ul>
            <div className="row">
          {savedMedicine.map((medicine) => (
            <div className="col-md-4 p-2">
            <MedCardInfo
            id={medicine.id}
              name={medicine.name}
              price={medicine.price}
              generic_name={medicine.generic_name}
              Dosage_forms={medicine.Dosage_forms}
              quantity={medicine.quantity}
              newsurl={medicine.url}
            />
          </div>
          ))}
          </div>
        </ul>
      ) : (
        <p>No saved medicine found.</p>
      )}
    </div>
  );
};

export default SavedMedicinePage;
