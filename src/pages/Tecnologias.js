import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import Html from '../assets/images/html.png'
import Css from '../assets/images/css.png'
import Javascript from '../assets/images/javascript.png'
import ImgReact from '../assets/images/react.png'
import Responsive from '../assets/images/responsive.png'
import ListGroup from 'react-bootstrap/ListGroup'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'


export default function Tecnologias() {

   
    return (
        <div className="contenedor-tecnologias" data-aos="fade-up">
            <Container>
                <Row >
                    <Col xs={12} md={6}>
                        <div className="imagenes-tecnologias mb-5">
                            <h2 className="mb-4">Hard Skill</h2>
                            <div className="imagenes justify-content-around">
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Html</Tooltip>}>
                                <img src={Html} alt="imagen html" className="imagen-tecnologias"/>
                            </OverlayTrigger>
                                
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Css</Tooltip>}>
                                <img src={Css} alt="imagen css" className="imagen-tecnologias"/>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">JavaScript</Tooltip>}>
                                <img src={Javascript} alt="imagen javascript" className="imagen-tecnologias"/>
                            </OverlayTrigger>

                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Aprendiendo - ReactJs</Tooltip>}>
                                <img src={ImgReact} alt="imagen react" className="imagen-tecnologias"/>
                            </OverlayTrigger>

                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Responsive</Tooltip>}>
                                <img src={Responsive} alt="imagen react" className="imagen-tecnologias"/>
                            </OverlayTrigger>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={6}>
                        <div className="habilidades">
                            <h2>Soft Skills</h2>
                            <div className="lista-habilidades">
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Ganas de aprender</ListGroup.Item>
                                    <ListGroup.Item>Trabajo en equipo</ListGroup.Item>
                                    <ListGroup.Item>Comunicacion</ListGroup.Item>
                                    <ListGroup.Item>Capacidad para escuchar</ListGroup.Item>
                                    <ListGroup.Item>Compromiso y Responsabilidad</ListGroup.Item>
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
