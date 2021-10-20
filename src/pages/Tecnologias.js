import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import Html from '../assets/images/html.png'
import Css from '../assets/images/css.png'
import Javascript from '../assets/images/javascript.png'
import ImgReact from '../assets/images/react.png'
import Responsive from '../assets/images/responsive.png'
import ListGroup from 'react-bootstrap/ListGroup'

export default function Tecnologias() {

   
    return (
        <div className="contenedor-tecnologias" data-aos="fade-up">
            <Container>
                <Row >
                    <Col xs={12}>
                        <div className="imagenes-tecnologias mb-5">
                            <h2 className="mb-4">Tecnologias</h2>
                            <div className="imagenes justify-content-around">
                                <img src={Html} alt="imagen html" className="imagen-tecnologias"/>
                                <img src={Css} alt="imagen css" className="imagen-tecnologias"/>
                                <img src={Javascript} alt="imagen javascript" className="imagen-tecnologias"/>
                                <img src={ImgReact} alt="imagen react" className="imagen-tecnologias"/>
                                <img src={Responsive} alt="imagen react" className="imagen-tecnologias"/>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12}>
                        <div className="habilidades">
                            <h2>Habilidades</h2>
                            <div className="lista-habilidades">
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Ganas de aprender</ListGroup.Item>
                                    <ListGroup.Item>Trabajo en equipo</ListGroup.Item>
                                    <ListGroup.Item>Autoconocimiento</ListGroup.Item>
                                    <ListGroup.Item>Capacidad para escuchar</ListGroup.Item>
                                    <ListGroup.Item>Compromiso</ListGroup.Item>
                                    <ListGroup.Item>Autodesarrollo</ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}