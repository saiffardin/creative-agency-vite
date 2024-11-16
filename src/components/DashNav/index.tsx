import { useState } from "react";
import LogoutBtn from "./LogoutBtn";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";

interface Props {
  title: string;
  userName: string;
}

const DashNav = ({ title, userName }: Props) => {
  const [showCanvas, setShowCanvas] = useState(false);
  const handleCanvasClose = () => setShowCanvas(false);
  const handleCanvasShow = () => setShowCanvas(true);

  return (
    <>
      <nav className="border rounded bg-body-tertiary d-none d-lg-flex justify-content-between p-md-3 mx-md-2">
        <h5 className="title my-auto">{title}</h5>
        <div className="d-flex gap-2">
          <h5 className="my-auto">{userName}</h5>
          <LogoutBtn />
        </div>
      </nav>

      <Navbar expand="lg">
        <Container>
          <Navbar.Brand className="d-lg-none">{title}</Navbar.Brand>
          <Navbar.Toggle onClick={handleCanvasShow} />
          <Navbar.Collapse />
        </Container>
      </Navbar>

      <Offcanvas show={showCanvas} onHide={handleCanvasClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{userName}</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <LogoutBtn />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default DashNav;
