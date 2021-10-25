import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Foto from '../assets/images/LuisPv.jpg'
import Github from '../assets/images/github.png'
import Linkedin from '../assets/images/linkedin.png'

function SobreMi() {
    return (
        <div className="contenedor-sobremi">
            <Container>
                <Row className="flex-md-row-reverse">
                    <Col xs={12} md={5}>
                        <div className="fotografia text-center" data-aos="fade-right">
                            <img src={Foto} alt="fotografia LuisPv" className="imagen" />

                            <div className="iconos-redes mt-4">
                                <a href="https://github.com/luispv02" target="_blank" rel="noopener noreferrer"><img src={Github} alt="icon github" className="img-redes"/></a>
                                <a href="https://www.linkedin.com/in/luis-fernando-p%C3%A9rez-varajas-b6539818b/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="icon Linkedin" className="img-redes"/></a>
                                
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={7} className="mt-5 mt-md-0">
                        <div className="informacion px-2" data-aos="fade-left">
                            <h2>Sobre Mi</h2>
                            <p className="mt-2">Desarrollador Web Junior, mi principal objetivo es obtener experiencia laboral y obtener mayor conocimiento en Desarollo Front End. Soy pasante de la carrera Ingenieria en Sistemas Computaciones. Aprendiendo de forma autodidacta.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SobreMi 