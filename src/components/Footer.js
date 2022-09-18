import { Container, Row, Col } from "react-bootstrap"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const Footer = () => {
    return (
        <footer className="footer p-5">
            <Container>
                <Row className="align-item-center">
                    <Col size={12} sm={6}>
                        <span className="text-white font-weight-bold display-4 mb-2 d-inline-block">Luiz Dev</span>
                    </Col>
                    <Col size={12} sm={6} className="justify-content-right">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/luizinfected/" alt="Link Externo" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
                            <a href="https://www.instagram.com/luiz.coss/" alt="Link Externo" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Instagram" /></a>
                        </div>
                        <p>Copyright 2022. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
      </footer>

    )
}

export default Footer