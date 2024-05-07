import { Navbar, Nav, Container } from "react-bootstrap";


const NavBar = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
   
        <Navbar.Brand href="/">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item> <Nav.Link href="/">Home</Nav.Link> </Nav.Item>
            <Nav.Item> <Nav.Link href="/about">About</Nav.Link> </Nav.Item>
            <Nav.Item> <Nav.Link href="//projects">Projects</Nav.Link> </Nav.Item>
            <Nav.Item> <Nav.Link href="/resume">Resume</Nav.Link> </Nav.Item>
          </Nav>
        </Navbar.Collapse>
    
    </Navbar>
  );
}

export default NavBar;