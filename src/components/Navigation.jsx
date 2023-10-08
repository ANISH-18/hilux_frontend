import React, { useState } from "react";
import {
  Container,
  Nav,
  NavLink,
  Navbar,
  NavbarBrand,
  Offcanvas,
} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";
import "../css/color.css";
import "../css/main.css";
import navbarlogo from "../assets/images/navbar_logo.png";

import "../css/navigation.css";

export default function Navigation() {
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const closeOffCanvas = () => {
    setShowOffCanvas(false);
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className=" nav " sticky="top">
        <Container className="container">
          <NavbarBrand>
            <Link to={"/"} className="link-to">
              {/* <h3 className="logo ">HILUX</h3> */}
              <img src={navbarlogo} alt="" className="img-logo " />
            </Link>
          </NavbarBrand>
          <NavbarToggle
            aria-controls="offcanvas"
            onClick={() => setShowOffCanvas(!showOffCanvas)}
          />
          <Navbar.Offcanvas
            id="offcanvas"
            placement="end"
            className="off-canvas  "
            show={showOffCanvas}
            onHide={closeOffCanvas}
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end ms-auto navbar">
                <NavLink
                  className="nav-link"
                  as={Link}
                  to={"/"}
                  onClick={closeOffCanvas}
                >
                  <h6 className="navbar">Home</h6>
                </NavLink>

                <NavLink
                  className="nav-link"
                  as={Link}
                  to={"/products"}
                  onClick={closeOffCanvas}
                >
                  <h6 className="navbar">Products</h6>
                </NavLink>
                <NavLink
                  className="nav-link"
                  as={Link}
                  to={"/aboutus"}
                  onClick={closeOffCanvas}
                >
                  <h6 className="navbar"> About Us</h6>
                </NavLink>
                <NavLink
                  className="nav-link"
                  as={Link}
                  to={"/contactus"}
                  onClick={closeOffCanvas}
                >
                  <h6 className="navbar"> Contact Us</h6>
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
