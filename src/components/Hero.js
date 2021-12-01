import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Typewriter} from 'react-simple-typewriter'
import './Hero.css'
import Aos from 'aos'


function Hero() {

    useEffect(() => {
        Aos.init({duration: 1500});      
    }, [])
    
    return (
        <div className="hero">
            {/* <video src={Fondo} loop muted autoPlay></video> */}
            <Container>
                <Row>
                    <Col xs={12} className="text-center mb-5">
                        <h2 className="text-white name">
                            <Typewriter 
                                words={['Luis Fernando Perez Varajas']}
                                typeSpeed="120"
                            /> 
                        </h2>
           
                        <h3 className="text-white mt-4 front" data-aos="fade-up">
                            Desarrollador Front End
                            {<br/>}
                            <Typewriter 
                                words={[' Html', ' Css', ' JavaScript', ' React', ' Responsive', ' Bootstrap']}
                                loop
                                cursor
                                cursorStyle="|"
                                deleteSpeed="100"
                                typeSpeed="99"
                            />
                        </h3>
                    </Col>

                    <Col xs={12} className="text-center">
                        <a href="../cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-cv text-decoration-none">Ver CV</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero
