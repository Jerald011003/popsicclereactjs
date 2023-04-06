import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container className="py-2">
        <Row>
          <Col md={4} className="text-center">
            <h5>Connect With Us</h5>
            <div className="d-flex justify-content-center">
              <a href="#" className="me-3 text-white">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="me-3 text-white">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <h5>About Us</h5>
            <p className="mb-0">
              Popsiccle showcases music of all genres with features like download, create playlist, heart a song. etc.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Contact Us</h5>
            <p className="mb-0">
              Email: Popsiccle@gmail.com <br />
              Phone: 1234567890
          
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} POPSICCLE All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
