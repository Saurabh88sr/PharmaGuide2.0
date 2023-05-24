import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

function Database() {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handle = async (event) => {
    event.preventDefault();
    console.log(inputText);
    setSearchValue(inputText);
    fetchData();
  };

  const fetchData = () => {
    fetch(`http://127.0.0.1:7000/drug?keyword=${searchValue}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (searchValue) {
      fetchData();
    }
  }, [searchValue]);

  return (
    <>
      <Form onSubmit={handle}>
        <Form.Group>
          <Form.Control
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message here"
          />
        </Form.Group>
        <Button variant="dark" type="submit" className="mb-5 mt-2">
          Submit
        </Button>
      </Form>

      <div style={{ padding: "100 px" }}>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Medicine</th>
              <th>Generic</th>
              <th>Brand</th>
              <th>Manufacturer</th>
              <th>Diagnosis</th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(data) && data.length > 0 ? (
              data.map((d, i) => (
                <tr key={i}>
                  <td> {d.id} </td>
                  <td> {d.Medicine} </td>
                  <td> {d.Generic} </td>
                  <td> {d.Brand} </td>
                  <td> {d.Manufacturer} </td>
                  <td> {d.Diagnosis} </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No data found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Database;
