import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal, Row, Table } from "react-bootstrap";
import "../../css/table.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../css/table.css";

export default function Category_Fourteen() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Container className="mt-2">
        <div>
          <h1>Nutraceutical Products</h1>
          <Form>
            <Form.Group
              className="mb-3 input-resize"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Product Name"
              />
            </Form.Group>
          </Form>
        </div>
      </Container>
      <Container className="mt-3">
        <TB search={search} setSearch={setSearch} />
      </Container>
    </>
  );
}

const TB = ({ search, setSearch }) => {
  const [data, setData] = useState([]);
  let [selectedProductName, setSelectedProductName] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const getData = () => {
    axios.get("https://node.hiluxlaboratories.com/category_six").then((res) => {
      setData(res.data.data);
    });
  };
  const one = data.slice(0, 16);
  const two = data.slice(16, 51);
  const three = data.slice(51, 117);
  const four = data.slice(117, 125);
  const five = data.slice(125, 132);
  const six = data.slice(132, 175);
  const seven = data.slice(175, 188);
  const eight = data.slice(188, 204);
  const nine = data.slice(204, 218);
  const ten = data.slice(218, 246);
  const eleven = data.slice(246, 252);
  const twelve = data.slice(252, 262);
  const thirteen = data.slice(262, 269);
  const fourteen = data.slice(269, 283);

  useEffect(() => {
    getData();
  }, []);

  const handleOrderClick = (productName) => {
    setSelectedProductName(productName);

    setIsModalOpen(true);
  };
  return (
    <>
      <Container fluid>
        <Row>
          <h1 className="text-center mt-3 mb-2">Gummy Candies</h1>

          <Table className="rounded" striped hover responsive="sm">
            <thead className="yellow-thead">
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Form</th>
                <th className="text-center">Inquiry</th>
              </tr>
            </thead>
            <tbody>
              {one
                .filter((eachData) => {
                  return search === ""
                    ? eachData
                    : eachData.name.toLocaleLowerCase().includes(search);
                })
                .map((eachData, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td className="text-capitalize">{eachData.name}</td>
                      <td className="text-capitalize">
                        {eachData.description}
                      </td>
                      <td className="text-capitalize">{eachData.form}</td>
                      <td>
                        <Button
                          className="ms-3"
                          onClick={() => {
                            handleOrderClick(eachData.name);
                          }}
                        >
                          Order
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">Gynee Suplement</h1>

          <Table className="rounded" striped hover responsive="sm">
            <thead className="yellow-thead">
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Form</th>
                <th className="text-center">Inquiry</th>
              </tr>
            </thead>
            <tbody>
              {two
                .filter((eachData) => {
                  return search === ""
                    ? eachData
                    : eachData.name.toLocaleLowerCase().includes(search);
                })
                .map((eachData, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td className="text-capitalize">{eachData.name}</td>
                      <td className="text-capitalize">
                        {eachData.description}
                      </td>
                      <td className="text-capitalize">{eachData.form}</td>
                      <td>
                        <Button
                          className="ms-3"
                          onClick={() => {
                            handleOrderClick(eachData.name);
                          }}
                        >
                          Order
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">
            Immunity & Multivitamin Supplement
          </h1>

          <Table className="rounded" striped hover responsive="sm">
            <thead className="yellow-thead">
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Form</th>
                <th className="text-center">Inquiry</th>
              </tr>
            </thead>
            <tbody>
              {three
                .filter((eachData) => {
                  return search === ""
                    ? eachData
                    : eachData.name.toLocaleLowerCase().includes(search);
                })
                .map((eachData, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td className="text-capitalize">{eachData.name}</td>
                      <td className="text-capitalize">
                        {eachData.description}
                      </td>
                      <td className="text-capitalize">{eachData.form}</td>
                      <td>
                        <Button
                          className="ms-3"
                          onClick={() => {
                            handleOrderClick(eachData.name);
                          }}
                        >
                          Order
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">Liver Supplement</h1>

          <Table className="rounded" striped hover responsive="sm">
            <thead className="yellow-thead">
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Form</th>
                <th className="text-center">Inquiry</th>
              </tr>
            </thead>
            <tbody>
              {four
                .filter((eachData) => {
                  return search === ""
                    ? eachData
                    : eachData.name.toLocaleLowerCase().includes(search);
                })
                .map((eachData, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td className="text-capitalize">{eachData.name}</td>
                      <td className="text-capitalize">
                        {eachData.description}
                      </td>
                      <td className="text-capitalize">{eachData.form}</td>
                      <td>
                        <Button
                          className="ms-3"
                          onClick={() => {
                            handleOrderClick(eachData.name);
                          }}
                        >
                          Order
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">Opthal Supplement</h1>

          <Table className="rounded" striped hover responsive="sm">
            <thead className="yellow-thead">
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Form</th>
                <th className="text-center">Inquiry</th>
              </tr>
            </thead>
            <tbody>
              {five
                .filter((eachData) => {
                  return search === ""
                    ? eachData
                    : eachData.name.toLocaleLowerCase().includes(search);
                })
                .map((eachData, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td className="text-capitalize">{eachData.name}</td>
                      <td className="text-capitalize">
                        {eachData.description}
                      </td>
                      <td className="text-capitalize">{eachData.form}</td>
                      <td>
                        <Button
                          className="ms-3"
                          onClick={() => {
                            handleOrderClick(eachData.name);
                          }}
                        >
                          Order
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">Orthopedic Supplement</h1>

          <Table className="rounded" striped hover responsive="sm">
            <thead className="yellow-thead">
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Form</th>
                <th className="text-center">Inquiry</th>
              </tr>
            </thead>
            <tbody>
              {six
                .filter((eachData) => {
                  return search === ""
                    ? eachData
                    : eachData.name.toLocaleLowerCase().includes(search);
                })
                .map((eachData, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td className="text-capitalize">{eachData.name}</td>
                      <td className="text-capitalize">
                        {eachData.description}
                      </td>
                      <td className="text-capitalize">{eachData.form}</td>
                      <td>
                        <Button
                          className="ms-3"
                          onClick={() => {
                            handleOrderClick(eachData.name);
                          }}
                        >
                          Order
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">
            Gastrointenstinal Supplement
          </h1>

          <Table className="rounded" striped hover responsive="sm">
            <thead className="yellow-thead">
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Form</th>
                <th className="text-center">Inquiry</th>
              </tr>
            </thead>
            <tbody>
              {seven
                .filter((eachData) => {
                  return search === ""
                    ? eachData
                    : eachData.name.toLocaleLowerCase().includes(search);
                })
                .map((eachData, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td className="text-capitalize">{eachData.name}</td>
                      <td className="text-capitalize">
                        {eachData.description}
                      </td>
                      <td className="text-capitalize">{eachData.form}</td>
                      <td>
                        <Button
                          className="ms-3"
                          onClick={() => {
                            handleOrderClick(eachData.name);
                          }}
                        >
                          Order
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">Feffervescent Tablets</h1>

          <Table className="rounded" striped hover responsive="sm">
            <thead className="yellow-thead">
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Form</th>
                <th className="text-center">Inquiry</th>
              </tr>
            </thead>
            <tbody>
              {eight
                .filter((eachData) => {
                  return search === ""
                    ? eachData
                    : eachData.name.toLocaleLowerCase().includes(search);
                })
                .map((eachData, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td className="text-capitalize">{eachData.name}</td>
                      <td className="text-capitalize">
                        {eachData.description}
                      </td>
                      <td className="text-capitalize">{eachData.form}</td>
                      <td>
                        <Button
                          className="ms-3"
                          onClick={() => {
                            handleOrderClick(eachData.name);
                          }}
                        >
                          Order
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">
            Infertiltiy & PCOS Supplement
          </h1>

          <Table className="rounded" striped hover responsive="sm">
            <thead className="yellow-thead">
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Form</th>
                <th className="text-center">Inquiry</th>
              </tr>
            </thead>
            <tbody>
              {nine
                .filter((eachData) => {
                  return search === ""
                    ? eachData
                    : eachData.name.toLocaleLowerCase().includes(search);
                })
                .map((eachData, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td className="text-capitalize">{eachData.name}</td>
                      <td className="text-capitalize">
                        {eachData.description}
                      </td>
                      <td className="text-capitalize">{eachData.form}</td>
                      <td>
                        <Button
                          className="ms-3"
                          onClick={() => {
                            handleOrderClick(eachData.name);
                          }}
                        >
                          Order
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">
            Brain, Memory & Neuro Supplement
          </h1>

          <Table className="rounded" striped hover responsive="sm">
            <thead className="yellow-thead">
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Form</th>
                <th className="text-center">Inquiry</th>
              </tr>
            </thead>
            <tbody>
              {ten
                .filter((eachData) => {
                  return search === ""
                    ? eachData
                    : eachData.name.toLocaleLowerCase().includes(search);
                })
                .map((eachData, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td className="text-capitalize">{eachData.name}</td>
                      <td className="text-capitalize">
                        {eachData.description}
                      </td>
                      <td className="text-capitalize">{eachData.form}</td>
                      <td>
                        <Button
                          className="ms-3"
                          onClick={() => {
                            handleOrderClick(eachData.name);
                          }}
                        >
                          Order
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">UTI Supplement</h1>

          <Table className="rounded" striped hover responsive="sm">
            <thead className="yellow-thead">
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Form</th>
                <th className="text-center">Inquiry</th>
              </tr>
            </thead>
            <tbody>
              {eleven
                .filter((eachData) => {
                  return search === ""
                    ? eachData
                    : eachData.name.toLocaleLowerCase().includes(search);
                })
                .map((eachData, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td className="text-capitalize">{eachData.name}</td>
                      <td className="text-capitalize">
                        {eachData.description}
                      </td>
                      <td className="text-capitalize">{eachData.form}</td>
                      <td>
                        <Button
                          className="ms-3"
                          onClick={() => {
                            handleOrderClick(eachData.name);
                          }}
                        >
                          Order
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">Protien Supplement</h1>

          <Table className="rounded" striped hover responsive="sm">
            <thead className="yellow-thead">
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Form</th>
                <th className="text-center">Inquiry</th>
              </tr>
            </thead>
            <tbody>
              {twelve
                .filter((eachData) => {
                  return search === ""
                    ? eachData
                    : eachData.name.toLocaleLowerCase().includes(search);
                })
                .map((eachData, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td className="text-capitalize">{eachData.name}</td>
                      <td className="text-capitalize">
                        {eachData.description}
                      </td>
                      <td className="text-capitalize">{eachData.form}</td>
                      <td>
                        <Button
                          className="ms-3"
                          onClick={() => {
                            handleOrderClick(eachData.name);
                          }}
                        >
                          Order
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">Cardiac</h1>

          <Table className="rounded" striped hover responsive="sm">
            <thead className="yellow-thead">
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Form</th>
                <th className="text-center">Inquiry</th>
              </tr>
            </thead>
            <tbody>
              {thirteen
                .filter((eachData) => {
                  return search === ""
                    ? eachData
                    : eachData.name.toLocaleLowerCase().includes(search);
                })
                .map((eachData, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td className="text-capitalize">{eachData.name}</td>
                      <td className="text-capitalize">
                        {eachData.description}
                      </td>
                      <td className="text-capitalize">{eachData.form}</td>
                      <td>
                        <Button
                          className="ms-3"
                          onClick={() => {
                            handleOrderClick(eachData.name);
                          }}
                        >
                          Order
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Row>
        <Row>
          <h1 className="text-center mt-3 mb-2">Derma</h1>

          <Table className="rounded" striped hover responsive="sm">
            <thead className="yellow-thead">
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Form</th>
                <th className="text-center">Inquiry</th>
              </tr>
            </thead>
            <tbody>
              {fourteen
                .filter((eachData) => {
                  return search === ""
                    ? eachData
                    : eachData.name.toLocaleLowerCase().includes(search);
                })
                .map((eachData, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td className="text-capitalize">{eachData.name}</td>
                      <td className="text-capitalize">
                        {eachData.description}
                      </td>
                      <td className="text-capitalize">{eachData.form}</td>
                      <td>
                        <Button
                          className="ms-3"
                          onClick={() => {
                            handleOrderClick(eachData.name);
                          }}
                        >
                          Order
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Row>
        <Popup
          show={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
          selectedProductName={selectedProductName}
          category="Nutraceutical Products"
        />
      </Container>
    </>
  );
};

const Popup = ({ show, handleClose, selectedProductName, category }) => {
  const [product, setProduct] = useState(selectedProductName);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    product_name: product,
    category: category,
  });

  useEffect(() => {
    setProduct(selectedProductName);
  }, [selectedProductName]);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      product_name: product,
      category: category,
    }));
  }, [product, category]);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  // console.log("SetData", formData);
  // console.log("Product Name", product);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log("After Submit data", formData);

    // const postData = {
    //   ...formData,
    //   product_name: product,
    //   category,
    // };

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

    axios
      .post("https://node.hiluxlaboratories.com/product_enquiry", formData)
      .then((response) => {
        console.log("Data submitted successfully:", response.data);
        handleClose();
        // alert("Data Submitted Succussfully");
        submitSuccuss();

        // console.log("REsponse data", formData);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };
  return (
    <>
      {" "}
      <ToastContainer />
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton className="text-center mod-header">
          <h5 className="text-center">Product Inquiry</h5>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                placeholder="Name"
                type="name"
                onChange={handleFormChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact No</Form.Label>
              <Form.Control
                name="contact"
                placeholder="Contact No"
                type="number"
                onChange={handleFormChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                placeholder="Email"
                type="email"
                onChange={handleFormChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control value={`${selectedProductName}`} readOnly />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control value={category} readOnly />
            </Form.Group>
            <Form.Group className="text-center mt-4 mb-3 ">
              <Button type="submit" className="submit-button">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
