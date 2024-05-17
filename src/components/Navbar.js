import { Navbar, Nav, Container } from "react-bootstrap";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";


const NavBar = () => {
  return (
    <Navbar expand="md" bg="dark" data-bs-theme="dark" className="nav-bar">
      <Container>
        <Navbar.Brand href="/" className="nav-bar-brand">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-bar-link">
            <Nav.Item> <Nav.Link href="/"><AiOutlineHome/> Home</Nav.Link> </Nav.Item>
            <Nav.Item> <Nav.Link href="/about"><AiOutlineUser/> About</Nav.Link> </Nav.Item>
            <Nav.Item> <Nav.Link href="/projects"><AiOutlineProject/>Projects</Nav.Link> </Nav.Item>
            <Nav.Item> <Nav.Link href="/resume"><CgFileDocument/>Resume</Nav.Link> </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavBar;