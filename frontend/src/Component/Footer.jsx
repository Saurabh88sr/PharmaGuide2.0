import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer =()=>{
    return(
        <div>
            <footer className="footer">
      <Container>
        <Row>
          
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: pharmaguide2023@gmail.com<br />Phone: +1 (123) 000-000<br />Address: M P, Bhopal, 46852</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <p><a href="/">Facebook</a><br /><a href="/">Twitter</a><br /><a href="/">Instagram</a></p>
          </Col>
        </Row>
        <hr />
        <p className="text-center">Project_
          <a href="/">PharmaGuide</a>
        </p>
      </Container>
    </footer>
        </div>

    );
};

export default Footer;