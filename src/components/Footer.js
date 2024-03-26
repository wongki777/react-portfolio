import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/logo1.png";
import navIcon2 from "../assets/img/logo2.png";
import navIcon3 from "../assets/img/logo3.png";

export const Footer = () => {
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>

          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="mailto:oliviawong07@outlook.com"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/wongki777"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.behance.net/oliviawong07"><img src={navIcon1} alt="Icon" /></a>
            </div>
            <div className="footer__copyright">
              <small>&copy; Made with ❤️️ by Olivia Wong {getYear()}. All rights reserved.</small>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
