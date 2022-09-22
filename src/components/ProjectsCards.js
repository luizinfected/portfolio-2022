import { Col } from "react-bootstrap";

export const ProjectsCard = ({ title, description, imgUrl, link }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <a href={link} alt="Projetos" target="_blank" rel="noreferrer">
                    <img src={imgUrl} alt="Projeto" />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </a>
            </div>
        </Col>
    )
}

export default ProjectsCard;
