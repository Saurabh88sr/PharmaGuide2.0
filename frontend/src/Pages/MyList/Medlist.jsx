import { Container, Row, Col } from "react-bootstrap";


const Medlist =()=>{
    return(
        <>
        <Container>
          <Row className="d-flex">
            <Col>
              <ul className="list-group">
                <li className="list-group-item justify-content-between align-items-center">
                  <div className="headBg"><h4>Medicine Name</h4> </div>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                  Generic Name
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                 Price
                </li>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse assumenda excepturi distinctio nemo aspernatur
                    voluptate, illum aperiam maiores vitae iste nesciunt officia
                    neque perspiciatis animi delectus praesentium ratione eaque
                    fugiat.
                  </p>
                </li>
                
              </ul>
            </Col>
            <Col>
              <ul className="list-group">
                <li className="list-group-item justify-content-between align-items-center">
                  <div className="headBg"><h4>Medicine Name</h4> </div>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                  Generic Name
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                 Price
                </li>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse assumenda excepturi distinctio nemo aspernatur
                    voluptate, illum aperiam maiores vitae iste nesciunt officia
                    neque perspiciatis animi delectus praesentium ratione eaque
                    fugiat.
                  </p>
                </li>
                
              </ul>
            </Col>
          </Row>
        </Container>
        </>
    );
};

export default Medlist;