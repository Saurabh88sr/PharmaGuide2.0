import React, { useState } from 'react';
import { saveMedicine, unsaveMedicine } from './savedMedicine';

const MedCardInfo = (props) => {
  const {
    id,
    name,
    quantity,
    generic_name,
    price,
    Dosage_forms,
    url,
  } = props;

  const [isSaved, setIsSaved] = useState(false);
  const [displayMedicine, setDisplayMedicine] = useState(true);

  const handleSaveClick = () => {
    if (!isSaved) {
      saveMedicine({ id, name, quantity, generic_name, price, Dosage_forms, url });
      setIsSaved(true);
    } else {
      unsaveMedicine(id);
      setIsSaved(false);
    }
  };

  const handleUnsaveClick = () => {
    unsaveMedicine(id);
    setIsSaved(false);
    setDisplayMedicine(false);
  };

  if (!displayMedicine) {
    return null;
  }

  return (
    <>
      <div className="card p-2">
        <div className="card-body">
          <h5 className="card-title text-primary">Medicine Name: {name}</h5>
          <p className="card-text">
            <b>ID:</b> {id}
          </p>
          <p className="card-text">
            <b>Quantity:</b> {quantity}
          </p>
          <p className="card-text">
            <b>Generic Name:</b> {generic_name}
          </p>
          <p className="card-text text-danger">
            <b>Price:</b> {price}
          </p>
          <p className="card-text">
            <b>Dosage Forms:</b> {Dosage_forms}
          </p>
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">
            Read More
          </a>

          {isSaved ? (
            <button className="btn btn-sm btn-danger" onClick={handleUnsaveClick}>
              Save
            </button>
          ) : (
            <button className="btn btn-sm btn-success" onClick={handleSaveClick}>
              Save
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default MedCardInfo;
