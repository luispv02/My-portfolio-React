import React from 'react'
import Github from '../assets/images/github.png'
import Internet from '../assets/images/internet.png'
import {Col} from 'react-bootstrap'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

function ProyectoCard({proyecto}) {

    return (
        <Col md={6} lg={4} className="mx-auto">
            <div className="card mb-5"  data-aos="fade-up">
                <img src={proyecto.imagen} alt="imagen proyecto" className="img-proyecto"/>

                <div className="card-body">
                    <h3>{proyecto.titulo}</h3>

                    <div className="card-icons">
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Ver Codigo</Tooltip>}>
                            <span>
                                <a href={proyecto.github} target="_blank" rel="noopener noreferrer">
                                    <img src={Github} alt="icono github" className="icon-github img-fluid"/>
                                </a>
                            </span>
                        </OverlayTrigger>

                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Ver Pagina</Tooltip>}>
                            <span>
                                <a href={proyecto.pagina} target="_blank" rel="noopener noreferrer">
                                    <img src={Internet} alt="icono github" className="icon-github"/>
                                </a>
                            </span>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default ProyectoCard
