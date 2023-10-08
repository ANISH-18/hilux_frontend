import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Col, Container, Row } from "react-bootstrap";
import "../css/foot.css";
import "../css/main.css";
import "../css/foot-temp.css";
import hiluxlogo from "../assets/images/navbar_logo.png";

import { Link } from "react-router-dom";

export default function Foot() {
  return (
    <>
      <Container fluid className="main-container-foot ">
        <Row>
          <Row lg={3} xs={1} md={3} className="pt-5">
            <Col className="mb-4 ">
              <Brand />
            </Col>
            <Col>
              <Links />
            </Col>
            <Col className="contact-row">
              <Contact />
            </Col>
          </Row>
          <Row lg={1} xs={1} className="pb-5 pt-5">
            <Col>
              <Credits />
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}

const Brand = () => {
  return (
    <>
      <Container className="brand-adjust">
        <Row lg={1} md={1} xs={1}>
          -
          <Col>
            <Link to={"/"} className="link-to">
              {/* <h1 className="fw-bold text-white heading-footer">HILUX</h1> */}
              <img
                src={hiluxlogo}
                alt=""
                srcset=""
                className="footer-logo-hilux"
              />
            </Link>
          </Col>
          <Col className="social-links  ">
            <a
              href="https://wa.me/message/H3NEN2CKG4WJF1"
              target="_blank"
              className="me-3 socialicons-foot"
            >
              <WhatsAppIcon fontSize="large" />
            </a>
            <a
              href="https://www.facebook.com/Hilux-Laboratories-103764962768523/"
              target="_blank"
              className="me-3 socialicons-foot"
            >
              <FacebookIcon fontSize="large" />
            </a>
            {/* <a href="" className="me-3 socialicons-foot">
              <InstagramIcon fontSize="string" />
            </a> */}
            <a
              href="https://www.linkedin.com/company/hilux-laboratories/"
              target="_blank"
              className="me-3 socialicons-foot"
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const Links = () => {
  return (
    <Container fluid>
      <Row lg={1} xs={1} className="mt-1">
        <Col>
          <h6 className="text-white fw-bold ">Useful Links</h6>
        </Col>
        <Col>
          <ul className="usefulllinks-ul">
            <li>
              <Link to="/" className="usefulinks">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="usefulinks">
                Products
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="usefulinks">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="usefulinks">
                Contact Us
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

const Contact = () => {
  return (
    <Container className="cont-container">
      <Row lg={1} xs={1} className="">
        <Col>
          <h6 className="fw-bold text-white">Corporate Office</h6>
          <div className="addd">
            <p className="contactaddress">
              Hanuman Nagar, Nagpur,
              <br /> Maharashtra 440009
            </p>
          </div>
        </Col>
        <Col>
          <div className="con text-white">
            <p>
              <strong className="email-foot">Phone: </strong>
              +91 9766547527
            </p>
            <p>
              <strong className="email-foot">Email: </strong>
              <span className="">hiluxlabs@outlook.com</span>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const Credits = () => {
  return (
    <Container>
      <Row lg={1} xs={1} className="">
        <Col className="center p-0 m-0">
          <p className="txt-footer p-0 m-0 text-white">
            {" "}
            &copy; Copyright
            <strong>
              <span>HILUX</span>
            </strong>
            . All Rights Reserved
          </p>
        </Col>
        {/* <Col className="center ">
          <span className="me-1 txt-des  txt-footer text-white">
            Desgined by
          </span>
          <a
            href="https://privatechnologies.in/"
            target="_blank"
            className="text-white txt-footer txt-des"
            rel="noreferrer"
          >
            PRIVA TECHNOLOGIES
          </a>
        </Col> */}
      </Row>
    </Container>
  );
};
