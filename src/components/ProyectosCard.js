import React from 'react'
import './ProyectosCard.css'
import ProyectoCard from './ProyectoCard'
import { Container, Row} from 'react-bootstrap'
import {objProyectos} from '../utils/ObjProyectos'

function ProyectosCard() {

    return (
        <div className="proyectos-card"  data-aos="fade-up">
            <Container>
                <Row>
                    <h1 className="text-center mb-5">Proyectos</h1>
                        {objProyectos.map((proyecto) => (
                            <ProyectoCard 
                                key={proyecto.titulo}
                                proyecto={proyecto}
                            />
                        ))}
                </Row>
            </Container>
        </div>
    )
}

export default ProyectosCard

