import { Col } from "react-bootstrap";
import PropTypes from 'prop-types';

export const ProjectCard = ({ title, description, imgUrl, liveLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
            <button type="button" className="btn-link" onClick={() => window.open(liveLink)}>See live</button>
          </div>
          <button type="button" className="btn-link" onClick={() => window.open(description)}>See source</button>
        </div>
      </div>
    </Col>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
