import React from "react";
import "../css/main.css";
import "../css/acc.css";
import "../css/wrap.css";
import img1 from "../assets/images/Accreditations/Ministry_ayush-removebg-preview.png";
import img2 from "../assets/images/Accreditations/fda 2.png";
import img3 from "../assets/images/Accreditations/gmp.jpeg";
import img4 from "../assets/images/Accreditations/iso.png";
import img5 from "../assets/images/Accreditations/madeIndiaremove.png";
import img6 from "../assets/images/Accreditations/who.png";
import img7 from "../assets/images/Accreditations/fssai-removebg-preview.png";

import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";
import { useEffect } from "react";

import { Card, Col, Container, Image, Row } from "react-bootstrap";

export default function Accreditations() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" }); // Initialize AOS with desired options
  }, []);
  return (
    <>
      <div className="wrap-acc">
        <Container className="man-cont-acc mt-3 view">
          <Container className="accreditations-heading">
            <h1>Accreditations</h1>
          </Container>
          <Container className="  mt-5 ">
            <Row className="main-row-acc" md={2} data-aos="fade-in">
              <Col lg={3} xs={6} className="mb-3">
                <Imagecard img={img1} />
              </Col>
              <Col lg={3} xs={6} className="mb-3">
                <Imagecard img={img2} />
              </Col>
              <Col lg={3} xs={6} className="mb-3">
                <Imagecard img={img3} />
              </Col>
              <Col lg={3} xs={6} className="mb-3">
                <Imagecard img={img4} />
              </Col>
              <Col lg={3} xs={6} className="mb-3 text-center">
                <Imagecard img={img5} />
              </Col>
              <Col lg={3} xs={6} className="mb-3 text-center">
                <Imagecard img={img6} />
              </Col>
              <Col lg={3} xs={6} className="mb-3 text-center">
                <Imagecard img={img7} />
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
}

const Imagecard = (props) => {
  return (
    <Card className="card-acc text-center" data-aos="fade-in">
      <div className="img-container-acc">
        {/* <Card.Img variant="top" src={props.img} className="img-man-acc" /> */}
        <Image src={props.img} className="img-man-acc" />
      </div>
    </Card>
  );
};
