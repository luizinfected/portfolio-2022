import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false)
    };

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home" alt="Logo">
          <span className="text-white font-weight-bold">Luiz Dev</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}   >Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skill')} >Skills</Nav.Link>
            <Nav.Link href="#projetos" className={activeLink === 'projectos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projetos')} >Projetos</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/luizinfected/" alt="Link externor" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.instagram.com/luiz.coss/" alt="Link externor" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <button className="vvd"><a href="https://github.com/luizinfected"><span>Meu GitHub</span></a></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;