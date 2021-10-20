import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TextField from '@mui/material/TextField';
;

function Formulario() {
    return (
        <div data-aos="fade-up">
            <Container>
                <Row>
                    <Col>
                        <h2 className="text-center">Contacto</h2>
                        <form className="p-3">
                            <div>
                                <TextField className="w-100" label="Asunto" variant="standard" />
                            </div>

                            <div className="mt-4">
                                <TextField className="w-100" label="Mensaje" variant="standard" />
                            </div>

                            <button>Enviar</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Formulario
