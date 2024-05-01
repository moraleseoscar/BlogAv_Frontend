import useToken from "@hooks/useToken";
import useNavigate from "@hooks/useNavigate";
import Logo from "@assets/logo.png";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Navegacion() {
  const { isLoggedIn, getRawToken } = useToken();
  const { navigate } = useNavigate(); // Eliminamos la variable 'page' que no se está utilizando

  let decodedToken = {};
  if (isLoggedIn) {
    decodedToken = getRawToken();
  }

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
    >
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
            <Nav.Link onClick={() => navigate("/nations")} href="#/nations">
              Naciones
            </Nav.Link>
            {isLoggedIn ? (
              <>
                <Nav.Link onClick={() => navigate("/posts")} href="#/posts">
                  Posts
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
                <NavDropdown title={decodedToken.username} id="user-registered">
                  <NavDropdown.Item
                    onClick={() => navigate("/logout")}
                    href="#/logout"
                  >
                    Salir
                  </NavDropdown.Item>
                </NavDropdown>
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
