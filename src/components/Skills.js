import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png"

// images
import react from '../assets/img/skills/react.png'
import php from '../assets/img/skills/php.png'
import javascript from '../assets/img/skills/javascript.png'
import csshtml from '../assets/img/skills/csshtml.png'
import git from '../assets/img/skills/git.png'
import mysql from '../assets/img/skills/mysql.png'
import firebase from '../assets/img/skills/firebase.png'

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Habilidades</h2>
                            <p><strong>PHP</strong>, <strong> React</strong>, <strong>Javascript</strong>, <strong>HTML5</strong>, <strong>CSS</strong>, <strong>Jquery</strong>, <strong>Git</strong>, <strong>MySQL</strong></p>
                            <Carousel responsive={responsive} swipeable={true} draggable={true}  arrows={false } showDots={true} infinite={true} autoPlay={false} autoPlaySpeed={1500} className="skill-slider"> 
                                <div className="item">
                                    <img src={react} alt="Projeto" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={csshtml} alt="Projeto" />
                                    <h5>CSS & HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={javascript} alt="Projeto" />
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={php } alt="Projeto" />
                                    <h5>PHP</h5>
                                </div>
                                <div className="item">
                                    <img src={git} alt="Projeto" />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={firebase} alt="Projeto" />
                                    <h5>Firebase</h5>
                                </div>
                                <div className="item">
                                    <img src={mysql} alt="Projeto" />
                                    <h5>MySQL</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt="Gradiente" className="background-image-left" />
        </section>
    )
}

export default Skills;