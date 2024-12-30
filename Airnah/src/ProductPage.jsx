import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col, Card, Button } from "react-bootstrap";
import { Form } from 'react-bootstrap';

const ProductPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Diamond Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="mt-5">
        <Row className="align-items-center">
          {/* Image Section */}
          <Col md={6}>
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300"
                alt="Diamond"
                className="rounded"
              />
            </Card>
          </Col>

          {/* Description Section */}
          <Col md={6}>
  <Card>
    <Card.Body>
      <Card.Title as="h1" className="mb-3">Exquisite Diamond</Card.Title>
      <Card.Text>
        Discover the brilliance of our premium diamonds. Each gem is
        handcrafted to perfection, ensuring unmatched quality and beauty.
      </Card.Text>

      {/* Category Selections */}
      <Form>
        {/* Size Selection */}
        <Form.Group className="mb-3">
          <Form.Label><strong>Diamond Size:</strong></Form.Label>
          <div>
            <Button variant="outline-secondary" className="me-2">
              Small
            </Button>
            <Button variant="outline-secondary" className="me-2">
              Medium
            </Button>
            <Button variant="outline-secondary">Large</Button>
          </div>
        </Form.Group>

        {/* Color Selection */}
        <Form.Group className="mb-3">
          <Form.Label><strong>Diamond Color:</strong></Form.Label>
          <div>
            <Button variant="outline-secondary" className="me-2">
              White
            </Button>
            <Button variant="outline-secondary" className="me-2">
              Yellow
            </Button>
            <Button variant="outline-secondary">Pink</Button>
          </div>
        </Form.Group>

        {/* Material Selection */}
        <Form.Group className="mb-3">
          <Form.Label><strong>Material:</strong></Form.Label>
          <div>
            <Button variant="outline-secondary" className="me-2">
              Gold
            </Button>
            <Button variant="outline-secondary" className="me-2">
              Platinum
            </Button>
            <Button variant="outline-secondary">Silver</Button>
          </div>
        </Form.Group>

        {/* Carat Selection */}
        <Form.Group className="mb-3">
          <Form.Label><strong>Carat:</strong></Form.Label>
          <div>
            <Button variant="outline-secondary" className="me-2">
              1 Carat
            </Button>
            <Button variant="outline-secondary" className="me-2">
              2 Carat
            </Button>
            <Button variant="outline-secondary">3 Carat</Button>
          </div>
        </Form.Group>
      </Form>

      {/* Price and Buy Button */}
      <h3 className="text-primary">$5,000</h3>
      <Button variant="primary" className="mt-3">
        Buy Now
      </Button>
    </Card.Body>
  </Card>
</Col>

        </Row>
      </Container>
    </div>
  );
};

export default ProductPage;
