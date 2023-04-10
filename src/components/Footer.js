import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import Avatar from '../assets/POPSICCLE.png';

function Footer() {
  return (
    <footer className="bg-black text-white">
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={4} className="text-center">
            <h5>Connect with us</h5>
            <div className="d-flex justify-content-center">
              <a href="#" className="me-3 text-white">
              <i className="fab fa-facebook fa-lg"></i>              </a>
              <a href="#" className="me-3 text-white">
              <i className="fab fa-twitter fa-lg"></i>              </a>
              <a href="#" className="text-white">
              <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </Col>
          <Col md={4} className="text-center">
  <a href="https://popsiccle-site.vercel.app/#/">
    <img src={Avatar} alt="Popsiccle logo" className="footer-logo" />
  </a>
</Col>

          <Col md={4} className="text-center">
          <h5>About</h5>

            <p className="mb-0">
              Popsiccle showcases music of all genres with features like downloading, creating playlists, and favoriting songs.
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
