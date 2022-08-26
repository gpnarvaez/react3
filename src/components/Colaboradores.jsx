import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from "react";
import { BaseColaboradores } from "./BaseColaboradores";
import uuid from 'react-uuid';


const Colaborador = () => {
    const [nombreColaborador, setNombreColaborador] = useState('');
    const [emailColaborador, setEmailColaborador] = useState('');
    const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores);
    const [inputBuscar, setInputBuscador] = useState(BaseColaboradores);

    // Función que envía el formulario
    const enviarFormulario = (e) => {
        e.preventDefault();
        setListaColaboradores([...listaColaboradores,
        {
            id: uuid(), nombre: nombreColaborador, correo: emailColaborador,
        }])
        setInputBuscador(BaseColaboradores);
    }

    const Buscar=(inputUser)=>{
        setInputBuscador(BaseColaboradores);
        if(inputUser !==''){
            let listaFiltrada=listaColaboradores.filter((ele)=>(ele.nombre.includes(inputUser)))
            setListaColaboradores(listaFiltrada)
        }
    }

    return (
        <div>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">Colaboradores</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="inputBuscar">
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Buscar colaborador"
                                    className="me-2"
                                    name="inputUser"
                                    onChange={e=>Buscar(e.target.value)}/>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <div>
                <Form onSubmit={enviarFormulario}>
                    <Form.Group className="mb-3" name="nombreColaborador" value={nombreColaborador} onChange={e => setNombreColaborador(e.target.value)}>
                        <Form.Label>Nombre del colaborador</Form.Label>
                        <Form.Control type="text" placeholder="Ingresa el nombre" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail" value={emailColaborador} name="emailColaborador" onChange={e => setEmailColaborador(e.target.value)}>
                        <Form.Label>Correo del colaborador</Form.Label>
                        <Form.Control placeholder="Ingresa el email" type="email"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        + Agregar
                    </Button>
                </Form>
            </div>

            <div>
                <h3>Listado de Colaboradores</h3>
                <ul>
                    {listaColaboradores.map(colaborador =>
                        <li key={colaborador.nombre}> {colaborador.nombre} - {colaborador.correo}
                        </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Colaborador