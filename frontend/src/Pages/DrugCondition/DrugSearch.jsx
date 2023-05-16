import React, { useState } from "react";
import diseaseData from "./diseaseData.json";

const DrugSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    const filteredResults = diseaseData.diseases.filter((disease) =>
      disease.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleGeneralButtonClick = () => {
    setSearchQuery(""); // Clear the search query for general button
    handleSearchSubmit();
  };

  const handleSpecificButtonClick = (query) => {
    setSearchQuery(query);
    handleSearchSubmit();
  };

  return (
    <div className="container cardcolor w-75 mt-5 p-5">
      <h1 className="p-2">Search your Condition</h1>
      <div>
        <button
          onClick={handleGeneralButtonClick}
          className="btn btn-sm btn-dark mb-2"
        >
          General Search
        </button>

        <input
          type="text"
          placeholder="Condition like... Asthma, COVID"
          value={searchQuery}
          onChange={handleSearchChange}
          className="form-control"
        />
        <ul>
          {diseaseData.diseases.map((disease) => (
            <button
              className="btn"
              onClick={() => handleSpecificButtonClick(disease.name)}
              key={disease.name}
            >
              {disease.name}
            </button>
          ))}
        </ul>
      </div>

      {searchResults.length > 0 ? (
        <div className="mt-4 p-4">
          <ul>
            {searchResults.map((disease) => (
              <table className="table" key={disease.name}>
                <h4 className="headBg">{disease.name}</h4>
                <tbody>
                  <tr>
                    <th scope="row">Symptoms:</th>
                    <td>{disease.symptoms.join(", ")}</td>
                  </tr>
                  <tr>
                    <th scope="row">Precautions:</th>
                    <td>{disease.precautions.join(", ")}</td>
                  </tr>
                  <tr>
                    <th scope="row">Medicine:</th>
                    <td>{disease.medicine.join(", ")}</td>
                  </tr>
                </tbody>
              </table>
            ))}
          </ul>
        </div>
      ) : (
        <p>Condition should be specific</p>
      )}
    </div>
  );
};

export default DrugSearch;
