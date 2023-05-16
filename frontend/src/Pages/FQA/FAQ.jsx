import React, { useState } from "react";
// import axios from 'axios';
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import MostAsked from "./MostAsked";
// import NewQuestion from "./NewQuetion";

function FQA() {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);


  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const message = {
      text: inputText,
    };
    setMessages([...messages, message]);
    setInputText("");

    // const response = await axios.post('/api/chat', { message });
    // const chatResponse = response.data;
    // setMessages([...messages, chatResponse]);
  };
 

  return (
    <>
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h1 className="text-center mt-5 mb-4">
            Have a Question? Search for Answer First
          </h1>
          <Form onSubmit={handleFormSubmit}>
          <Button variant="dark" type="submit" className="mb-2 mt-2">
              Search
            </Button>
            <Form.Group>
              <Form.Control
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Type your message here"
              />
            </Form.Group>
            
          </Form>
          <ListGroup className="mb-5">
            {messages.map((message, index) => (
              <ListGroup.Item
                key={index}
                className="bg-light"
              >
                <p className="text-dark">
                  {message.text}
                </p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <div className="board">
          <div className="board-row">
              <MostAsked message="Most Asked Question"/>
              <MostAsked message="Most Asked Question"/>
          </div>
          <div className="board-row">
          <MostAsked message="Most Asked Question"/>
          <MostAsked message="Most Asked Question"/>
          </div>
          <div className="board-row">
          <MostAsked message="Most Asked Question"/>
          <MostAsked message="Most Asked Question"/>           
          </div>
        </div>
      </Row>
    </Container>
    <div className="card-icon card-box fixed-bottom">
    
    <h5>Did not find what you were looking for? <button type="text" className="btn">
    <a href="/QuestionForm" > Ask a Question</a></button> </h5>
    
  </div>
  </>
  );
}

export default FQA;
