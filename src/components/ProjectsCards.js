import { Col } from "react-bootstrap";

export const ProjectsCard = ({ title, description, imgUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="Projeto" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectsCard;
