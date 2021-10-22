import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Foto from '../assets/images/avatar.png'
import Github from '../assets/images/github.png'
import Linkedin from '../assets/images/linkedin.png'
import Whatsapp from '../assets/images/whatsapp.png'
import Facebook from '../assets/images/facebook.png'

function SobreMi() {

    return (
        <div className="contenedor-sobremi">
            <Container>
                <Row className="flex-md-row-reverse">
                    <Col xs={12} md={6}>
                        <div className="fotografia text-center" data-aos="fade-right">
                            <img src={Foto} alt="fotografia LuisPv" className="avatar" />

                            <div className="iconos-redes mt-4">
                                <a href="https://github.com/luispv02" target="_blank" rel="noopener noreferrer"><img src={Github} alt="icon github" className="img-redes"/></a>
                                <a href="https://www.linkedin.com/in/luis-fernando-p%C3%A9rez-varajas-b6539818b/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="icon Linkedin" className="img-redes"/></a>
                                <a href="https://api.whatsapp.com/send?phone=527841109307" target="_blank" rel="noopener noreferrer"><img src={Whatsapp} alt="icon Whatsapp" className="img-redes"/></a>
                                <a href="https://www.facebook.com/luisfernando.perezvarajas.5" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="icon Facebook" className="img-redes"/></a>
                            </div>
                        </div>
                    </Col>

                    <Col xs={12} md={6} className="mt-5 mt-md-0">
                        <div className="informacion px-2" data-aos="fade-left">
                            <h2>Sobre Mi</h2>
                            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper risus vel dolor pretium, euismod molestie mi faucibus. Nunc eu ex ut ante vehicula consectetur ac id ex. Pellentesque pellentesque viverra porttitor. Suspendisse non aliquam diam. Aenean non turpis nec risus placerat commodo sed a nibh. Donec eleifend luctus diam, id interdum orci scelerisque in. Praesent imperdiet ut massa at vulputate.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SobreMi 