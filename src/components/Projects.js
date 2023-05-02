import { Col, Container, Row, Tab } from "react-bootstrap"
import { ProjectsCard } from "./ProjectsCards";
import Nav from 'react-bootstrap/Nav';
import projImg1 from "../assets/img/proj-01.jpg";
import projImg2 from "../assets/img/proj-02.jpg";
import projImg3 from "../assets/img/proj-03.jpg";
import projImg4 from "../assets/img/pro22.PNG";
import projImg5 from "../assets/img/proj-05.jpg";
import projImg6 from "../assets/img/pro11.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';


export const Projects = () => {

    const projects = [
        {
            title: "Luiz MiniBlog",
            description: "Sitema de Blog, usando React & Firebase, uma rede social usável.",
            imgUrl: projImg6,
            link: "https://github.com/luizinfected/miniblog",
        },
        {
            title: "Rick and Morty Characters",
            description: "Consumindo a API do Rick and Morty",
            imgUrl: projImg4,
            link: "https://luiz-react-morty.netlify.app/",
        },
        {
            title: "HazorFlix",
            description: "Monte sua lista de filmes para ver depois! ou seus filmes favoritos",
            imgUrl: projImg2,
            link: "https://github.com/luizinfected/hazorflix",

        },
        {
            title: "Naruto Dex",
            description: "Monte seu time ninja!",
            imgUrl: projImg1,
            link: "https://github.com/luizinfected/narutodex",
        },

        {
            title: "Usando Fetch no React",
            description: "Projeto de blog",
            imgUrl: projImg3,
            link: "https://github.com/luizinfected/ReactRoutesv2",
        },

        {
            title: "Sistema de chamados em PHP",
            description: "Projeto de sistema que fiz para o quartel que servi em 2021",
            imgUrl: projImg5,
            link: "https://github.com/luizinfected/STI-Chamados-PHP"
        },

    ];
    return (
        <section id="projetos">
            <Container>
                <Row>
                    <Col>
                        <h2>Projetos</h2>
                        <p>Projetos que venho realizando conforme o tempo, cada vez ficando melhores</p>

                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="first" className="p-5">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className="bg-secondary">Projetos</Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <Nav.Link eventKey="second">Tab two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab three</Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectsCard key={index} {...project} />

                                                )
                                            })
                                        }

                                    </Row>
                                    <div className="text-center">
                                        <p>Outros projetos... <button className="button-projects"><a href="https://github.com/luizinfected"><span>Meu GitHub</span></a></button></p>

                                    </div>

                                </Tab.Pane>

                                {/* <Tab.Pane eventKey="second">Lore impsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Lore impsum</Tab.Pane> */}

                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Gradiente"></img>
        </section>
    )
}

export default Projects