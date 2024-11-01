import { useNavigate } from "react-router-dom";
import { Button, Nav, Navbar } from "react-bootstrap";
import mainLogo from "@assets/images/logos/logo.png";

import "./NavSection.css";

const NavSection = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Navbar className="mx-md-5 px-md-5 " expand="lg">
        <Navbar.Brand href="#home" className="mx-5">
          <img
            src={mainLogo}
            width="150"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle className="" aria-controls="basic-navbar-nav" />

        <Navbar.Collapse className="text-center" id="basic-navbar-nav">
          <Nav style={{ fontFamily: "Poppins" }} className="ms-auto">
            <Nav.Link href="#Home" className="m-2 underline pb-0">
              Home
            </Nav.Link>
            <Nav.Link href="#OurPortfolio" className="m-2 underline pb-0">
              Our Portfolio
            </Nav.Link>
            <Nav.Link href="#OurTeam" className="m-2 underline pb-0">
              Our Team
            </Nav.Link>
            <Nav.Link href="#ContactUs" className="m-2 underline pb-0">
              Contact Us
            </Nav.Link>
          </Nav>

          <Button
            className="landingPage-btn mx-5 my-2"
            onClick={() => navigate("login")}
          >
            Login
          </Button>
        </Navbar.Collapse>
      </Navbar>
      {/* </Container> */}
    </main>
  );
};

export default NavSection;
