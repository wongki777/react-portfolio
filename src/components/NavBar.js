import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from "../assets/img/logo1.png";
import navIcon2 from "../assets/img/logo2.png";
import navIcon3 from "../assets/img/logo3.png";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  // the activeLink state could be used to keep track of which link in the Navbar is currently active or selected. This is particularly useful for styling purposes, such as highlighting the active link to provide visual feedback to the user.

  const [scrolled, setScrolled] = useState(false);
  //Using the useEffect hook in a React Navbar component to trigger actions on scroll can be helpful for implementing various behaviors, such as hiding or changing the appearance of the Navbar as the user scrolls down the page.

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
            <div className="social-icon">
              <a href="mailto:oliviawong07@outlook.com"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/wongki777"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.behance.net/oliviawong07"><img src={navIcon1} alt="Icon" /></a>
            </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
