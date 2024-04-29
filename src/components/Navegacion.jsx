import useToken from "@hooks/useToken";
import useNavigate from "@hooks/useNavigate";
import Logo from "@assets/logo.png";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Navegacion() {
  const { isLoggedIn, getRawToken } = useToken();
  const { page, navigate } = useNavigate();

  let decodedToken = {};
  if (isLoggedIn) {
    decodedToken = getRawToken();
    console.log(decodedToken);
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")} href="#/">
          <img
            alt="Logo Avatar"
            src={Logo}
            width="50"
            height="50"
            className="d-inline-block align-s"
          />{" "}
          Avatar Blog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")} href="#/">
              Inicio
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/about")} href="#/about">
              Sobre nosotros
            </Nav.Link>
            {isLoggedIn ? (
              <>
                <Nav.Link onClick={() => navigate("/report")} href="#/report">
                  Reporte
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/logout")} href="#/logout">
                  Salir
                </Nav.Link>
              </>
            ) : (
              <Nav.Link onClick={() => navigate("/login")} href="#/login">
                Ingresar
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <>
                <Navbar.Text>{decodedToken.username}</Navbar.Text>
              </>
            ) : (
              <></>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;
