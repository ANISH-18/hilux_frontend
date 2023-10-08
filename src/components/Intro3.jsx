import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import img1 from "../assets/images/earth.png";
import "../css/main.css";
import "../css/intro3.css";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";
import { useEffect } from "react";

export default function Intro3() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" }); // Initialize AOS with desired options
  }, []);
  const details = [
    {
      id: 1,
      header1: "1000+",
      header2: "Product Lines",
      para: " With over 900+ products across more then 20 categories, we offer you variety",
      color: "#A2ACBD",
    },
    {
      id: 2,
      header1: "9",
      header2: "Compliances",
      para: "We fulfill every requirment: SOPs, BSE, TSE, COO, Mol, CoA, CoPP, GSDP, FIFO",
      color: "#DB4F48",
    },
    {
      id: 3,
      header1: "24",
      header2: "Hour Turnaround",
      para: "We guarantee 24hrs turnaround for all RFQs with a dedicated team for overseas trade.",
      color: "#008A5F",
    },
  ];
  return (
    <>
      {/* <h1 className="text-center mt-5">INTRO 3</h1> */}
      <Container className="mt-5 mb-5">
        <Row className="row-intro3" lg={3}>
          {details.map((details) => (
            <Col className="col-intro3 mb-3" xs={12} md={12} data-aos="fade-in">
              <Cards
                key={details.id}
                header1={details.header1}
                header2={details.header2}
                para={details.para}
                color={details.color}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

const Cards = ({ header1, header2, para, color }) => {
  return (
    <>
      <Card
        className="text-center card-intro3 "
        style={{ backgroundColor: `${color}` }}
        data-aos="fade-in"
      >
        <div className="mb-2">
          <Image src={img1} fluid style={{ width: "8rem" }} className="p-3 " />
        </div>
        <div className="mb-2">
          <h2 className="text-white">{header1}</h2>
        </div>
        <div className="mb-2">
          <h6 className="text-white">{header2}</h6>
        </div>
        <div>
          <p className="text-white">{para}</p>
        </div>
      </Card>
    </>
  );
};
