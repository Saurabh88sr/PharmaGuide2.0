import React, { useState } from "react";
import medicineData from "../medicineData.json";
import MedCard from "../../Component/MedCard";

const Identifier = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedShape, setSelectedShape] = useState("");
  const [matchedMedicines, setMatchedMedicines] = useState([]);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleShapeChange = (event) => {
    setSelectedShape(event.target.value);
  };

  const handleSearch = () => {
    const filteredMedicines = medicineData.filter(
      (medicine) => medicine.color === selectedColor && medicine.shape === selectedShape
    );
    if (filteredMedicines.length > 0) {
      setMatchedMedicines(filteredMedicines);
    } else {
      setMatchedMedicines([]);
    }
  };

  return (
    <div className="container w-75 mt-4 cardcolor p-5">
      <h1 className="p-3">Pill Identifier</h1>
      <div className="p-2">
      <label htmlFor="color">Pill Imprint</label><br />
        <input type="text" className="form-control" placeholder="Pill Imprint" /><br />
        <label htmlFor="color">Color:</label><br />
        <select value={selectedColor} className="btn btn-secondary dropdown-toggle" onChange={handleColorChange}>
          <option value="">Select a color</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Yellow">Yellow</option>
          {/* Add more color options as needed */}
        </select>
      </div>
      <div className="p-2">
        <label htmlFor="shape">Shape: </label><br />
        <select value={selectedShape} className="btn btn-secondary dropdown-toggle" onChange={handleShapeChange}>
          <option value="">Select a shape</option>
          <option value="Round">Round</option>
          <option value="Oval">Oval</option>
          <option value="Square">Square</option>
          {/* Add more shape options as needed */}
        </select>
      </div>
      <button className="btn btn-dark" onClick={handleSearch}>Search</button>
      {matchedMedicines.length > 0 ? (
        <div>
          <h3 className="headBg mt-3">Matched Medicines:</h3>
            {matchedMedicines.map((medicine) => (
                <div className="row">
                <div className=" p-2" key={medicine.name}>
              <MedCard
                name={medicine.name ? medicine.name: "Not Found "} 
                generic_name={medicine.generic_name ? medicine.generic_name: "Not Found "} 
                imageSrc={medicine.image ? medicine.image: "Not Found "} 
                Dosage_forms={medicine.Dosage_forms ? medicine.Dosage_forms: "Not Found "} 
                Imprint={medicine.Imprint ? medicine.Imprint: "Not Found "} 
                color={medicine.color ? medicine.color: "Not Found "} 
                shape={medicine.shape ? medicine.shape: "Not Found "} 


              />            
          </div>
          </div>
  
            ))}
        </div>
      ) : (
        <p>Color and Shape is not optional</p>
      )}
    </div>
  );
};

export default Identifier;