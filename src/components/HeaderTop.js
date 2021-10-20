import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import {Typewriter} from 'react-simple-typewriter'

function HeaderTop() {
    return (
        <div className="header-top bg-black">
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1 className="text-white text-center py-2">
                            <Typewriter 
                                words={['LuisPv']}
                                typeSpeed="350"
                            /></h1>
                    </Col>

                    <Col>
                        <nav className="d-none">
                            <li>
                                <a href="#inicio">Inicio</a>
                            </li>
                            <li>
                                <a href="#sobre-mi">Sobre Mi</a>
                            </li>
                            <li>
                                <a href="#proyectos">Proyectos</a>
                            </li>
                            <li>
                                <a href="#contacto">Contacto</a>
                            </li>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeaderTop
