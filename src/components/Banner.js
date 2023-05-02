
import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Web Developer", "Dev Front-End", "Dev Jr"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(200)
    const period = 2000;

    var tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText)
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    // useEffect(() => {
    let ticker = setTimeout(() => {
        tick()
        clearInterval(ticker)

    }, delta)


    // }, [text, delta])

    const stacks = ['React', 'Javascript', 'PHP', 'HTML5', 'CSS3', 'Jquery', 'SQL', 'Firebase', 'Git']

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={7} xl={7}>
                        <span className="tagline">Bem vindo ao meu Portfólio!</span>
                        <h1>{`Olá! sou o Luiz`} <span className="wrap">{text}</span></h1>
                        <p>Tenho 19 anos, focado em desenvolvimento Web, estou sempre a procura de observar e melhorar o que faço, absorvendo conteúdos e evoluindo. Comecei a programar em agosto do ano de 2021, hoje tenho conhecimento nessas tecnologias:{stacks.map(stack => (<strong>{stack}, </strong> ))} e evoluindo cada vez mais para um fullstack..</p>
                        <a class="no-a" href="luiz.pdf" target="_blank" alt="Currículo"><button>Currículo <ArrowRightCircle size={25} /></button></a>
                    </Col>

                    <Col xs={12} md={7} xl={5}>
                        <img src={headerImg} alt="Banner" />
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default Banner;