import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import img1 from "../assets/images/Why.jpg";
import "../css/intro2.css";
import "../css/intro.css";
import "../css/whyresponsive.css";

export default function Why() {
  return (
    <>
      <Container className="wrapper-why mt-4   main-container">
        <div className="mt-3 p-3 main-div">
          <Row className="" md={1}>
            <Col
              lg={6}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="img-intro text-center mb-2 ">
                <Image src={img1} className="img-fluid image-lab rounded" />
              </div>
            </Col>
            <Col
              lg={6}
              className="title-container p-0 m-0 d-flex align-items-center"
            >
              <div className="title text-center">
                <h3 className="mb-1 ">
                  Why Hilux Laboratories as your partner?
                </h3>

                <div>
                  <ul className="points">
                    <li>
                      Our pharmaceutical products are distributed and exported
                      on time to our clients irrespective of within India and
                      outside India.
                    </li>
                    <li>
                      We make the most affordable pharmaceutical drugs along
                      with incorporating the quality factor in our products.
                    </li>
                    <li>
                      We provide advanced manufacturing services blended with
                      appropriate manufacturing excellence, contract
                      manufacturing, Regulatory services and packaging.
                    </li>
                    <li>
                      We are a complete package of pharmaceutical, OTC and
                      Nutraceutical products that are manufactured, packaged,
                      distributed and exported by us.
                    </li>
                    <li>
                      If you are looking out for an overall pharmaceutical
                      solution, the Hilux laboratories Pvt. Ltd. Is the stop you
                      are looking for.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
