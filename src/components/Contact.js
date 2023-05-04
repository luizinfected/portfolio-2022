import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import contactImg from "../assets/img/contact-img.svg";
import emailjs from 'emailjs-com'

export const Contact = () => {

    const [send, setSend] = useState('Enviar')

    const handleSubmit = async (e) => {
        e.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_i4cir1y', e.target, 'DfCXHSsSk3lXM4Kli')
            .then((result) => {
                setSend('Enviado')
            }, (error) => {
                alert('Erro no envio' + error)
                setSend('Erro no envio.')
            });
        e.target.reset()


    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contato" />
                    </Col>
                    <Col md={6}>
                        <h2>Fale comigo!</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="name" placeholder="Seu nome:" />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="lastName" placeholder="Seu sobrenome:" />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" name="email" placeholder="Email:" />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" name="phone" placeholder="Telefone:" />
                                </Col>
                                <Col className="p-1">
                                    <textarea row="6" name="message" placeholder="Mensagem:" ></textarea>
                                    <button type="submit"><span>{send}</span></button>
                                </Col>


                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact