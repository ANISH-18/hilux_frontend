import React from "react";
import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../css/manufacture.css";
import "../css/main.css";
// import "../css/manuresponsive.css";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";

import img1 from "../assets/images/Manufacture/resize_man_card1.jpg";
import img2 from "../assets/images/Manufacture/man_card2.jpg";
import img3 from "../assets/images/Manufacture/man_card3.jpg";
import img4 from "../assets/images/Manufacture/img 4.jpg";
import img5 from "../assets/images/Manufacture/img 5.jpg";
import img6 from "../assets/images/Manufacture/man_card_6.jpg";
import { Link } from "react-router-dom";

export default function Manufacture() {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-in-out" }); // Initialize AOS with desired options
  }, []);
  return (
    <>
      <Container className="man-cont mt-3 view">
        <Container className="manufacture-of">
          <h1>Manufacturers OF</h1>
        </Container>
        <Container className="  mt-5 " data-aos="fade-in">
          <Row className="main-row-man">
            <Col lg={4} className="mb-3">
              <Link to={"/category_sixteen"}>
                <Imagecard img={img1} text="Derma" />
              </Link>
            </Col>
            <Col lg={4} className="mb-3">
              <Link to={"/category_two"}>
                <Imagecard img={img2} text="General" />
              </Link>
            </Col>
            <Col lg={4} className="mb-3">
              <Link to={"/category_fifteen"}>
                <Imagecard img={img3} text="Ayurvedic" />
              </Link>
            </Col>
            <Col lg={4} className="mb-3">
              <Link to={"/category_thirteen"}>
                <Imagecard img={img4} text="Pediatric" />
              </Link>
            </Col>
            <Col lg={4} className="mb-3">
              <Link to={"/category_one"}>
                <Imagecard img={img5} text="Orthopedic" />
              </Link>
            </Col>
            <Col lg={4} className="mb-3">
              <Link to={"/category_seventeen"}>
                <Imagecard img={img6} text="Cosmetic" />
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

const Imagecard = (props) => {
  return (
    <Card className="card-man">
      <div className="img-container">
        <Card.Img variant="" src={props.img} className="img-man" />
      </div>
      <div className="text-container">
        <h5>{props.text}</h5>
      </div>
    </Card>
  );
};
