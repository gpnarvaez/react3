import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from "react";
import { BaseColaboradores } from "./BaseColaboradores";


const Colaborador = () => {

return (
    <div>
    <div>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Colaboradores</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">     
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar colaborador"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre del colaborador</Form.Label>
        <Form.Control type="email" placeholder="Ingresa su nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Correo del colaborador</Form.Label>
        <Form.Control type="email" placeholder="Ingresa su correo" />
      </Form.Group>
      <Button variant="primary" type="submit">
        + Agregar
      </Button>
    </Form>
    </div>
</div>

)

}

export default Colaborador