import React from "react";
import "../css/color.css";
import "../css/topbar.css";
import { Container } from "react-bootstrap";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "../css/main.css";

export default function Topbar() {
  return (
    <>
      <section id="topbar" className="topbar bgc-top d-flex align-items-center">
        <Container className="p-1 d-flex justify-content-center justify-content-md-between">
          <div className="contact">
            <div className="email ">
              <EmailIcon fontSize="small" className="text-white" />
              <p className="text-white m-auto ">
                {" "}
                <a href="mailto:hiluxlabs@outlook.com">hiluxlabs@outlook.com</a>
              </p>
            </div>
            <div className="add ms-3  ">
              <LocationOnIcon fontSize="small" className="text-white" />
              <p className="text-white m-auto "> Hinjewadi, Pune</p>
            </div>
          </div>

          <div className="social-links d-none d-lg-block d-md-block d-flex align-items-center me-3">
            {/* <a href="" className="me-3 socialicons">
              <TwitterIcon fontSize="string" />
            </a> */}
            <a
              href="https://www.facebook.com/Hilux-Laboratories-103764962768523/"
              className="me-3 socialicons"
            >
              <FacebookIcon fontSize="string" />
            </a>
            {/* <a href="">
              <InstagramIcon fontSize="string socialicons" />
            </a> */}
            <a
              href="https://www.linkedin.com/company/hilux-laboratories/"
              className="me-3 socialicons"
            >
              <LinkedInIcon fontSize="string" />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
