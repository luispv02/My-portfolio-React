import React from 'react'
import './NavBottom.css'
import Tab from 'react-bootstrap/Tab'
import {Row, Col} from 'react-bootstrap'
import SobreMi from '../assets/images/sobre-mi.png'
import Proyectos from '../assets/images/proyectos.png'
import Home from '../assets/images/home.png'
import Contacto from '../assets/images/contacto.png'


function NavBottom() {
    return (
        <div className="nav-bottom py-3 d-md-none" >
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col>
                        <nav>
                            <li>
                                <a href="#inicio"><img src={Home} alt="icon about me" className="img-nav-bottom"/></a>
                            </li>
                            <li>
                                <a href="#sobre-mi"><img src={SobreMi} alt="icon about me" className="img-nav-bottom"/></a>
                            </li>
                            <li>
                                <a href="#proyectos"><img src={Proyectos} alt="icon about me" className="img-nav-bottom"/></a>
                            </li>
                            <li>
                                <a href="#contacto"><img src={Contacto} alt="icon about me" className="img-nav-bottom"/></a>
                            </li>
                        </nav>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default NavBottom
