import React from 'react';

const MedCardInfo = (props) => {
  const { imageSrc, name, quantity, generic_name, price, Dosage_forms, isSaved,newsurl, handleSave } = props;

  const handleSaveClick = () => {
    // Call the handleSave function passed as props
    handleSave();
  };

  return (
    <>
      <div className="card p-2">
        <img src={imageSrc ? "Image not found" : imageSrc} className="card-img-top" alt="Medicine Cover" />
        <div className="card-body">
          <h5 className="card-title text-primary">Medicine Name: {name}</h5>
          <p className="card-text"><b>Quantity:</b> {quantity}</p>
          <p className="card-text"><b>Generic Name:</b> {generic_name}</p>
          <p className="card-text text-danger"><b>Price:</b> {price}</p>
          <p className="card-text"><b>Dosage Forms:</b> {Dosage_forms}</p>
          <a href={newsurl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">
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
