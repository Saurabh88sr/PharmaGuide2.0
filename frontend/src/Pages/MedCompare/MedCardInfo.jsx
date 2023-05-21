import React from 'react';
import { saveMedicine, unsaveMedicine } from './savedMedicine';

const MedCardInfo = (props) => {
  const {
    id,
    image,
    name,
    quantity,
    generic_name,
    price,
    Dosage_forms,
    url,
    isSaved,
  } = props;

  const handleSaveClick = () => {
    if (isSaved) {
      unsaveMedicine(id);
    } else {
      saveMedicine({ id, name, quantity, generic_name, price, Dosage_forms, url });
    }
  };

  return (
    <>
      <div className="card p-2">
        <img src={image} className="card-img-top" alt="Medicine Cover" />
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
            <button className="btn btn-sm btn-danger" onClick={handleSaveClick}>
              Unsave
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
