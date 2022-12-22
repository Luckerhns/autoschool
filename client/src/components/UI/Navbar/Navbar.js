import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import {
  NEWS_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
  PROFILE_ROUTE,
  AUTOSTUDENT_ROUTE,
  AUTOSCHOOL_ROUTE,
} from "../../../utils/links";
import { Context } from "../../../State/CreateContext";
import { useNavigate } from "react-router-dom";

import { profile } from "../../../http/userAPI";

const Header = () => {
  const navigate = useNavigate();
  const exit = () => {
    localStorage.removeItem("token");
    navigate(MAIN_ROUTE);
    window.location.reload();
  };

  const profileData = async () => {
    const token = localStorage.getItem("token");
    await profile(token);
    navigate(PROFILE_ROUTE);
  };

  return (
    <Navbar bg="dark" className="position-relative" variant="dark">
      <Container className="d-flex justify-content-space">
        <Nav>
          <Nav.Link href={MAIN_ROUTE}>КСТ</Nav.Link>
          <Nav.Link href={AUTOSCHOOL_ROUTE}>Об автошколе</Nav.Link>
        </Nav>
        {!localStorage.getItem("token") ? (
          <Nav>
            <Button
              variant="outline-light"
              className="me-2"
              onClick={(e) => navigate(LOGIN_ROUTE)}
            >A
              Login
            </Button>
            <Button
              variant="outline-light"
              onClick={(e) => navigate(REGISTRATION_ROUTE)}
            >
              Registration
            </Button>
          </Nav>
        ) : (
          <Nav>
            <Button variant="primary" className="me-2" onClick={profileData}>
              Profile
            </Button>
            <Button variant="primary" onClick={exit}>
              Exit
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};
export default Header;
