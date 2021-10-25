import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Whatsapp from '../assets/images/whatsapp.png'
import Facebook from '../assets/images/facebook.png'
import Gmail from '../assets/images/gmail.png'
;

function IconosContacto() {
    return (
        <div data-aos="fade-up">
            <Container>
                <Row>
                    <Col md={10} lg={8} className="m-auto">
                        <h2 className="text-center">Contacto</h2>
                        <div className="text-center py-3">
                            <a href="https://api.whatsapp.com/send?phone=527841109307" target="_blank" rel="noopener noreferrer"><img src={Whatsapp} alt="icon Whatsapp" className="mx-4 img-contacto img-redes"/></a>
                            <a href="https://www.facebook.com/luisfernando.perezvarajas.5" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="icon Facebook" className="mx-4 img-contacto img-redes"/></a>
                            <a href="mailto:luispv.1002@gmail.com" target="_blank" rel="noopener noreferrer"><img src={Gmail} alt="icon Facebook" className="mx-4 img-contacto img-redes"/></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default IconosContacto
