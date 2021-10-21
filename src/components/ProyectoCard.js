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
                                <button>
                                    <img src={Github} alt="icono github" className="icon-github"/>
                                </button>
                            </span>
                        </OverlayTrigger>

                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Ver Pagina</Tooltip>}>
                            <span>
                                <button>
                                    <img src={Internet} alt="icono github" className="icon-github"/>
                                </button>
                            </span>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>

            {/* <Card className="mb-5">
                <img src={proyecto.imagen} alt="proyecto" className="img-card"/>
                    
                <Card.Body>
                    <Card.Title>{proyecto.titulo}</Card.Title>
            
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Ver Codigo</Tooltip>}>
                        <span>
                            <Button>
                                <img src={Github} alt="icon github" className="icon-github"/>
                            </Button>
                        </span>
                    </OverlayTrigger>

                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Ver Pagina</Tooltip>}>
                        <span>
                            <Button>
                                <img src={Internet} alt="icon github" className="icon-internet"/>
                            </Button>
                        </span>
                    </OverlayTrigger>
                </Card.Body>
            </Card> */}
        </Col>
    )
}

export default ProyectoCard
