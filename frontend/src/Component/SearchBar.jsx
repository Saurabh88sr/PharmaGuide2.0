import React, { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Form, Button } from "react-bootstrap";


function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const items = [
    {
      id: 0,
      name: "Cobaol",
    },
    {
      id: 1,
      name: "paracitamal",
    },
    {
      id: 2,
      name: "advil",
    },
    {
      id: 3,
      name: "PaHP",
    },
  ];
  // Your item list here

  const handleOnSearch = (string, results) => {
    setSearchTerm(string);
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };

  const handleSearch = () => {
    
    // Perform search or any other logic here
    console.log("Search term:", searchTerm);
  };

  return (
    <div className=" justify-content-md-center ">
      <h1 className="p-2 ">News</h1>
      <div className=" d-flex mb-4 w-75 ">
        <Form onSubmit={handleSearch} className="ms-5 w-75 ">
          <Button variant="dark" type="submit" className="mb-2">
            {props.button}
          </Button>
          <Form.Group>
            <ReactSearchAutocomplete
              items={items}
              onSearch={handleOnSearch}
              onHover={handleOnHover}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              autoFocus
              formatResult={formatResult}
            />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default SearchBar;
