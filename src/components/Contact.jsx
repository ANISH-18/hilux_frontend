import React from "react";
import { useState } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import "../css/contact.css";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import EmailIcon from "@mui/icons-material/Email";
import { ToastContainer, toast } from "react-toastify";

export default function Contact() {
  return (
    <>
      <Container className="mt-4 mb-4">
        <Row>
          <Col lg={6} xs={12}>
            <Cardsss />
          </Col>
          <Col lg={6} xs={12}>
            <Contactform />
          </Col>
        </Row>
      </Container>
    </>
  );
}

const Cardsss = () => {
  return (
    <>
      <MDBCard className="card-body-contact">
        <MDBCardBody className="flex-card">
          <AddLocationAltIcon fontSize="large" className="card-image" />
          <MDBCardTitle className="text-center card-one ">
            Our Corporate Office
          </MDBCardTitle>
          <MDBCardText className="no-flex"></MDBCardText>
        </MDBCardBody>
        <p className="card-text"> Hanuman Nagar, Nagpur, Maharashtra 440009</p>
      </MDBCard>
      <MDBCard className="card-body-contact">
        <MDBCardBody className="flex-card">
          <ContactPhoneIcon fontSize="large" className="card-image" />
          <MDBCardTitle className="text-center card-one ">
            Phone Number
          </MDBCardTitle>

          {/* <MDBCardText className="no-flex">+91 9766547527</MDBCardText> */}
        </MDBCardBody>
        <p className="card-text">+91 9766547527</p>
      </MDBCard>
      <MDBCard className="card-body-contact">
        <MDBCardBody className="flex-card">
          <EmailIcon fontSize="large" className="card-image" />
          <MDBCardTitle className="text-center card-one ">Email</MDBCardTitle>
          <MDBCardText className="no-flex"></MDBCardText>
        </MDBCardBody>
        <p className="card-text">hiluxlabs@outlook.com</p>
      </MDBCard>
    </>
  );
};

const Contactform = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handelChange = (e) => {
    e.preventDefault();
    setContact({ ...contact, [e.target.name]: e.target.value });
    console.log(contact);
  };

  const submitSuccuss = () => {
    toast.success("Data Submitted Succussfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const submitError = () => {
    toast.error("Enter Valid Fields", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handelSubmit = () => {
    if (!contact.name || !contact.email || !contact.number) {
      submitError();
      return;
    }

    axios
      .post("https://node.hiluxlaboratories.com/contactus", contact)
      .then((res) => {
        if (res.data) {
          submitSuccuss();
          setContact({
            name: "",
            email: "",
            number: "",
          });
        } else {
          alert("Error submitting data");
        }
      });
  };

  return (
    <>
      <ToastContainer />
      <Container className="contact-form">
        <Form className="Form-inner">
          <Form.Group>
            <h1 className="text-center heading-one">Contact Us</h1>
          </Form.Group>
          <Form.Group>
            <Form.Label className="heading">Name</Form.Label>
            <Form.Control
              type="email"
              value={contact.name}
              name="name"
              placeholder="Enter your name"
              onChange={(e) => handelChange(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="heading">Email</Form.Label>
            <Form.Control
              type="email"
              value={contact.email}
              name="email"
              placeholder="Enter your email"
              onChange={(e) => handelChange(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="heading">Phone No.</Form.Label>
            <Form.Control
              type="number"
              value={contact.number}
              name="number"
              placeholder="Enter your contact no"
              onChange={(e) => handelChange(e)}
            />
          </Form.Group>
          <Form.Group className="text-center m-4">
            <Button variant="info" onClick={handelSubmit}>
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};
