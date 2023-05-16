import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchMed = () => {
  const [medicines, setMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchMedicines = async () => {
      const options = {
        method: 'GET',
        url: 'https://medicine-autocomplete-indian-brands.p.rapidapi.com/api/medicine/search',
        params: {searchterm: searchTerm},
        headers: {
          'content-type': 'application/octet-stream',
          'X-RapidAPI-Key': '4fd660d289msh63b67201ed3a818p185564jsnb5cd3f16dcc6',
          'X-RapidAPI-Host': 'medicine-autocomplete-indian-brands.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setMedicines(response.data.data.medicines);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMedicines();
  }, [searchTerm]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Medicine Search</h1>
      <form>
        <label htmlFor="searchTerm">Enter search term:</label>
        <input type="text" id="searchTerm" name="searchTerm" value={searchTerm} onChange={handleSearchTermChange} />
      </form>
      <h2>Search Results:</h2>
      <ul>
        {medicines.map((medicines) => (
          <li key={medicines.id}>
            <strong>Name:</strong> {medicines.name} <br />
            <strong>Price:</strong> {medicines.price} <br />
            <strong>Content:</strong> {medicines.content} <br />
            <strong>Company Name:</strong> {medicines.companyName} <br />
            <strong>Rank:</strong> {medicines.rank}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchMed;
