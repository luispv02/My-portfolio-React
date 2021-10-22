import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TextField from '@mui/material/TextField';
;

function Formulario() {
    return (
        <div data-aos="fade-up">
            <Container>
                <Row>
                    <Col md={10} lg={8} className="m-auto">
                        <h2 className="text-center">Contacto</h2>
                        <form className="p-3" action="https://formsubmit.co/corre.pruebas10@gmail.com" method="POST" target="_blank" rel="noopener noreferrer">
                             <div>
                                <TextField className="w-100" label="Nombre" name="nombre"  variant="standard" required/>
                            </div>

                            <div>
                                <TextField className="w-100 mt-4" label="Asunto" name="asunto"  variant="standard" required/>
                            </div>

                            <div className="mt-4">
                                <TextField className="w-100" label="Mensaje" name="mensaje"  variant="standard" required/>
                            </div>

                            <button type="submit">Enviar</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Formulario
