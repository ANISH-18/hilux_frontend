import React from "react";
import { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import img1 from "../assets/images/about 2.jpg";
import "../css/intro2.css";
import "../css/intro.css";
import "../css/whyresponsive.css";
import vision from "../assets/images/vision.jpg";
import mission from "../assets/images/mission.jpg";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";
import WhatsAppButton from "./WhatsAppButton";

export default function Aboutus() {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: "ease-in-out" }); // Initialize AOS with desired options
  }, []);
  return (
    <>
      <Container className="wrapper mt-4 margin-aboutus ">
        <div className="mt-3 p-3 ">
          <Row className="" md={2} data-aos="fade-in">
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
                <h3 className="mb-1 about-heading ">About Us</h3>

                <div>
                  <ul className="points">
                    <li className="text-classd">
                      Hilux Laboratories provides one of the most affordable and
                      best quality products to the customers. We understand the
                      importance of quality of standard in all our products and
                      take utmost care while manufacturing the same with
                      adequate help from the doctors, pharmacists and our
                      research and development team.
                    </li>
                    <li className="text-classd">
                      At the same time, our professionals are highly talented
                      and knowledgeable who make sure that the ingredients and
                      products are well certified from all the vital
                      organizations like World Health Organization, US-FDA, GMP
                      and ISO 9001 brands that make these completely reliable
                      for the clients and ultimately for the end users or the
                      common people who will be using the same.
                    </li>
                    <li className="text-classd">
                      All these factors make us a trusted pharmaceutical brand.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container className="wrapper mt-4 margin-aboutus ">
        <div className="mt-3 p-3 ">
          <Row className="" md={2} data-aos="fade-in">
            <Col
              lg={6}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="img-intro text-center mb-2 ">
                <Image src={vision} className="img-fluid image-lab rounded" />
              </div>
            </Col>
            <Col
              lg={6}
              className="title-container p-0 m-0 d-flex align-items-center"
            >
              <div className="title text-center">
                <h3 className="mb-1 about-heading ">Our Vision</h3>

                <div>
                  <ul className="points">
                    <li className="text-classd">
                      Our vision is to be a leading pharmaceutical company in
                      India and to become a significant global player by
                      providing high quality, affordable and innovative
                      solutions in medicine and treatment.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container className="wrapper mt-4 margin-aboutus ">
        <div className="mt-3 p-3 ">
          <Row className="" md={2} data-aos="fade-in">
            <Col
              lg={6}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="img-intro text-center mb-2 ">
                <Image src={mission} className="img-fluid image-lab rounded" />
              </div>
            </Col>
            <Col
              lg={6}
              className="title-container p-0 m-0 d-flex align-items-center"
            >
              <div className="title text-center">
                <h3 className="mb-1 about-heading ">Our Mission</h3>

                <div>
                  <ul className="points">
                    <li className="text-classd">
                      We will discover, develop and successfully market
                      pharmaceutical products to prevent, diagnose, alleviate
                      and cure diseases.
                    </li>
                    <li className="text-classd">
                      We shall provide total customer satisfaction and achieve
                      leadership in chosen markets, products and services across
                      the globe, through excellence in technology, based on
                      world-class research and development.
                    </li>
                    <li className="text-classd">
                      We are responsible to the society. We shall be good
                      corporate citizens and will be driven by high ethical
                      standards in our practices.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <WhatsAppButton />
    </>
  );
}
