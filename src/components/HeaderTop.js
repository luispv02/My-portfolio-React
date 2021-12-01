import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Typewriter} from 'react-simple-typewriter'
import './HeaderTop.css'

function HeaderTop() {
    return (
        <div className="header-top">
            <Container>
                <Row className="align-items-md-center">
                    <Col xs={12} md={6}>
                        <a href="#inicio" className="text-white text-center py-2 text-md-start logo text-decoration-none d-block">
                            <Typewriter 
                                words={['LuisPv']}
                                typeSpeed="350"
                            /></a>
                    </Col>

                    <Col xs={12} md={6}>
                        <nav className="d-none d-md-block d-md-flex justify-content-md-around nav-top">
                            <li>
                                <a href="#sobre-mi" className="text-white text-decoration-none enlace">Sobre Mi</a>
                            </li>
                            <li>
                                <a href="#proyectos" className="text-white text-decoration-none enlace">Proyectos</a>
                            </li>
                            <li>
                                <a href="#contacto" className="text-white text-decoration-none enlace">Contacto</a>
                            </li>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeaderTop
