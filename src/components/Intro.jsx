import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "../css/color.css";
import "../css/intro.css";
import "../css/main.css";
import "../css/wrap.css";
// import firstimg from "../assets/images/3.png";
import secondimg from "../assets/images/hilux new one_.jpg";
import thirdimg from "../assets/images/hilux img two_.jpg";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import WhatsAppButton from "./WhatsAppButton";

export default function Intro() {
  return (
    <>
      <WhatsAppButton />
      <Container fluid className="caro-center">
        <MDBCarousel showControls fade>
          <MDBCarouselItem
            className="w-100 h-100 d-block  "
            itemId={1}
            src={thirdimg}
            alt="..."
          />
          <MDBCarouselItem
            className="w-100 h-100 d-block "
            itemId={2}
            src={secondimg}
            alt="..."
          />
        </MDBCarousel>
      </Container>
    </>
  );
}
