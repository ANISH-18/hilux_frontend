import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import img1 from "../assets/images/Intro2.png";
import "../css/intro.css";
import "../css/intro2.css";
import "../css/intro2res.css";
import "../css/wrap.css";
import PublicIcon from "@mui/icons-material/Public";

export default function Intro2() {
  return (
    <>
      <Container className="wrapper-intro2">
        <div className="mt-3 p-3">
          <Row lg={6} md={2}>
            <Col lg={6} className="title-container p-0 m-0 " md={{ order: 1 }}>
              <div className="title text-center">
                <h1 className="mb-1 text-we">
                  WE ARE EXPORTER{" "}
                  <span>
                    <PublicIcon fontSize="inherit" className="earth mb-2" />
                  </span>
                </h1>

                <div>
                  <ul className="points">
                    <li>BEST QUALITY PRODUCT.</li>
                    <li>CERTIFIED FROM ALL VIRTAL ORGANIZATION.</li>
                    <li>WORLDWIDE SHIPPING.</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6} md={{ order: 12 }}>
              <div className="img-intro text-center">
                <Image src={img1} className="img-fluid image-lab rounded" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
