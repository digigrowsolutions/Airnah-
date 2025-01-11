import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductPage.css";
import logo from './assets/logo.webp'; // Replace with the actual path to your logo
import ring from './assets/ring.webp'; // Replace with the actual path to your logo

import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Dropdown,
} from "react-bootstrap";

const ProductPage = () => {
  const textStyle = { color: "#000000", fontWeight: "bold" }; // Text color set to black

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="light" variant="light" expand="lg" className="shadow-sm">
        <Container>
          {/* Brand */}
          <Navbar.Brand href="/" className="fw-bold" style={textStyle}>
            <img
              src={logo}
              alt="Airnah Logo"
              style={{ height: '80px', width: 'auto' }} // Adjust the height and width as needed
            />
          </Navbar.Brand>

          {/* Toggle Button for Mobile View */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            {/* Centered Navigation Links */}
            <Nav className="mx-auto">
              <Nav.Link href="#home" style={textStyle}>
                Home
              </Nav.Link>
              <Nav.Link href="#shop" style={textStyle}>
                Shop
              </Nav.Link>
              <Dropdown>
                <Dropdown.Toggle variant="link" id="dropdown-templates" style={textStyle}>
                  Templates
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#template1">Template 1</Dropdown.Item>
                  <Dropdown.Item href="#template2">Template 2</Dropdown.Item>
                  <Dropdown.Item href="#template3">Template 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="link" id="dropdown-products" style={textStyle}>
                  Products
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#product1">Product 1</Dropdown.Item>
                  <Dropdown.Item href="#product2">Product 2</Dropdown.Item>
                  <Dropdown.Item href="#product3">Product 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link href="#pages" style={textStyle}>
                Pages
              </Nav.Link>
              <Dropdown>
                <Dropdown.Toggle variant="link" id="dropdown-mega" style={textStyle}>
                  Mega
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#mega1">Mega 1</Dropdown.Item>
                  <Dropdown.Item href="#mega2">Mega 2</Dropdown.Item>
                  <Dropdown.Item href="#mega3">Mega 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>

            {/* Right-Aligned Search and Cart Buttons */}
            <div className="d-flex align-items-center">
              <Form className="d-flex me-3">
                <Button variant="outline-dark">Search</Button>
              </Form>
              <Button variant="dark" className="d-flex align-items-center">
                Cart
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="mt-5">
        <Row className="g-3">
          {/* Rectangular Boxes Section */}
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body className="d-flex align-items-center justify-content-between">
                <span style={textStyle}>Choose a Setting</span>
                <div className="triangle-right" />
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body className="d-flex align-items-center justify-content-between">
                <span style={textStyle}>Choose a Diamond</span>
                <div className="triangle-right" />
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body className="d-flex align-items-center justify-content-between">
                <span style={textStyle}>Complete the Ring</span>
                <div className="triangle-right" />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Image and Description Sections */}
        <Row className="g-3 mt-4">
          {/* Image Section */}
          <Col md={8}>
            <Card className="shadow-sm">
              <Card.Img
                variant="top"
                src={ring}
                alt="Diamond Ring"
                className="rounded"
                style={{Height: "auto", objectFit: "cover" }}
              />
            </Card>
          </Col>

          {/* Description Section */}
          <Col md={4}>
            <Card className=" shadow-sm">
              <Card.Body>
                <Card.Title as="h5" className="mb-2">
                  <h1 style={textStyle}> <b>Bezel Setting Diamond Ring</b> </h1>
                </Card.Title>
                <Card.Text>
                  <h2 className="text-success " style={textStyle}>
                    ₹220.58 – ₹4,600.00
                  </h2>
                
                  <span className="text-muted small" style={{ color: "#000" }}>196 in stock</span>
                </Card.Text>
                <p className="small">
                  <strong style={textStyle}>Ordered:</strong> 4 <br />
                  <strong style={textStyle}>Items available:</strong> 196
                </p>

                {/* Category Selections */}
                <Form>
  {/* Diamond Size */}
  <div className="row mb-3">
    <div className="col-md-12">
      <Form.Group className="mb-2">
        <Form.Label className="small" style={textStyle}>
          <strong>Diamond Size:</strong>
        </Form.Label>
        <div>
          <Button className="btn-custom-size-0.5ct me-2" variant="outline-dark">
            0.5ct
          </Button>
          <Button className="btn-custom-size-1ct me-2" variant="outline-dark">
            1ct
          </Button>
          <Button className="btn-custom-size-1.5ct me-2" variant="outline-dark">
            1.5ct
          </Button>
          <Button className="btn-custom-size-2ct me-2" variant="outline-dark">
            2ct
          </Button>
          <Button className="btn-custom-size-2.5ct me-2" variant="outline-dark">
            2.5ct
          </Button>
          <Button className="btn-custom-size-3ct me-2" variant="outline-dark">
            3ct
          </Button>
          <Button className="btn-custom-size-3.5ct me-2" variant="outline-dark">
            3.5ct
          </Button>
          <Button className="btn-custom-size-4ct" variant="outline-dark">
            4ct
          </Button>
        </div>
      </Form.Group>
    </div>
  </div>

  {/* Clarity */}
  <div className="row mb-3">
    <div className="col-md-12">
      <Form.Group className="mb-2">
        <Form.Label className="small" style={textStyle}>
          <strong>Clarity:</strong>
        </Form.Label>
        <div>
          <Button size="sm" variant="outline-dark" className="me-2">
            FL
          </Button>
          <Button size="sm" variant="outline-dark" className="me-2">
            IF
          </Button>
          <Button size="sm" variant="outline-dark" className="me-2">
            VVS1
          </Button>
          <Button size="sm" variant="outline-dark" className="me-2">
            VVS2
          </Button>
          <Button size="sm" variant="outline-dark" className="me-2">
            VS1
          </Button>
          <Button size="sm" variant="outline-dark" className="me-2">
            VS2
          </Button>
          <Button size="sm" variant="outline-dark" className="me-2">
            SI1
          </Button>
          <Button size="sm" variant="outline-dark" className="me-2">
            SI2
          </Button>
          <Button size="sm" variant="outline-dark">
            I1
          </Button>
        </div>
      </Form.Group>
    </div>
  </div>

  {/* Color */}
  <div className="row mb-3">
    <div className="col-md-12">
      <Form.Group className="mb-2">
        <Form.Label className="small" style={textStyle}>
          <strong>Color:</strong>
        </Form.Label>
        <div>
          <Button size="sm" variant="outline-dark" className="me-2">
            D
          </Button>
          <Button size="sm" variant="outline-dark" className="me-2">
            E
          </Button>
          <Button size="sm" variant="outline-dark" className="me-2">
            F
          </Button>
          <Button size="sm" variant="outline-dark">
            G
          </Button>
        </div>
      </Form.Group>
    </div>
  </div>

  {/* Metal */}
  <div className="row mb-3">
    <div className="col-md-12">
      <Form.Group className="mb-2">
        <Form.Label className="small" style={textStyle}>
          <strong>Metal:</strong>
        </Form.Label>
        <div>
          <Button size="sm" variant="outline-dark" className="me-2">
            Platinum
          </Button>
          <Button size="sm" variant="outline-dark" className="me-2">
            White Gold
          </Button>
          <Button size="sm" variant="outline-dark">
            Yellow Gold
          </Button>
        </div>
      </Form.Group>
    </div>
  </div>
</Form>

<br/>
                <h2 className="text-dark " style={textStyle}>
                  ₹4,600.00
                </h2>
                <div className="d-flex align-items-center">
                  <Button size="sm" variant="dark" className="mt-2 me-2">
                    Add to cart
                  </Button>
                  <Button size="sm" variant="outline-dark" className="mt-2">
                    1
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductPage;
