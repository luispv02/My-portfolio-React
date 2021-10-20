import React, {useEffect} from 'react'
import Fondo from '../assets/video/fondo3.mp4'
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
            <video src={Fondo} muted autoPlay></video>
            <Container>
                <Row>
                    <Col xs={12} className="text-center my-5">
                        <h2 className="text-white name">
                            <Typewriter 
                                words={['Luis Fernando Perez Varajas']}
                                typeSpeed="120"
                            /> 
                        </h2>
           
                        <h3 className="text-white mt-4 front" data-aos="fade-up">
                            Fron End Develoaper
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
                        <button className="btn-cv">Ver CV</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero
