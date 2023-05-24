import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import MostAsked from "./MostAsked";

function FQA({ isLoggedIn }) {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSearchValue(inputText);
  };

  const fetchData = useCallback(() => {
    fetch(`http://127.0.0.1:7000/drug?keyword=${searchValue}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [searchValue]);

  useEffect(() => {
    if (searchValue) {
      fetchData();
    }
  }, [searchValue, fetchData]);

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <h1 className="text-center mt-5 mb-4">
              Have a Question? Search for Answer First
            </h1>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your Question here"
                />
              </Form.Group>
              <Button variant="dark" type="submit" className="mb-5 mt-2">
                Submit
              </Button>
            </Form>
            <ListGroup className="mb-5">
              {data.length > 0 ? (
                data.map((d, i) => (
                  <ListGroup.Item key={i} className="bg-light">
                    <p className="text-dark">{d.Generic}</p>
                  </ListGroup.Item>
                ))
              ) : (
                <ListGroup.Item className="bg-light">
                  <p className="text-dark"></p>
                </ListGroup.Item>
              )}
            </ListGroup>
          </Col>
          <div className="board">
            <div className="board-row">
              <MostAsked message={"Most Asked Question"} />
              <MostAsked message="Most Asked Question" />
            </div>
            <div className="board-row">
              <MostAsked message="Most Asked Question" />
              <MostAsked message="Most Asked Question" />
            </div>
            <div className="board-row">
              <MostAsked message="Most Asked Question" />
              <MostAsked message="Most Asked Question" />
            </div>
          </div>
        </Row>
      </Container>
      <div className="card-icon card-box fixed-bottom">
        <h5>
          Did not find what you were looking for?{" "}
          <button type="text" className="btn">
            <a href={isLoggedIn ? "/QuestionForm" : "/Login"}>Ask a Question</a>
          </button>{" "}
        </h5>
      </div>
    </>
  );
}

export default FQA;
