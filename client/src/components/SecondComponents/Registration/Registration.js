import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { login, registration } from "../../../http/userAPI";
import Header from "../../UI/Navbar/Navbar";
import "./Registration.scss";
import { Context } from "../../../State/CreateContext";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../../utils/links";
import jwt_decode from "jwt-decode";

const Registration = () => {
  const location = useNavigate();
  const isLogin = window.location.pathname;

  const [incorrectEmail, setIncorrectEmail] = useState(false);
  const [email, setEmail] = useState("eqwffeqw");
  const [password, setPassword] = useState("eqwewqe");
  const [username, setUsername] = useState("Qoqo");
  const [validate, setValidate] = useState(false);
  const checkEmail = (e) => {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    setEmail(e.target.value);
    if (!re.test(String(email).toLowerCase())) {
    } else {
      setValidate(true);
    }
  };

  const click = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (isLogin === REGISTRATION_ROUTE) {
        console.log(isLogin);
        data = await registration(username, email, password);
        location("/");
        window.location.reload();
      } else {
        data = await login(email, password);
        // window.location.reload();
        console.log(jwt_decode(localStorage.getItem("token")));
        location("/");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Header />
      {isLogin === REGISTRATION_ROUTE ? (
        <Form className="main_form">
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></Form.Control>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => checkEmail(e)}
              placeholder="E-mail"
            />
            {validate == false ? (
              <Form.Text id="text" style={{ color: "red" }}>
                Incorrect email
              </Form.Text>
            ) : (
              <Form.Text id="text">This email is correct</Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          {validate == false ? (
            <Button disabled variant="outline-dark" type="submit">
              Submit
            </Button>
          ) : (
            <Button onClick={click} variant="outline-dark" type="submit">
              Submit
            </Button>
          )}
        </Form>
      ) : (
        <Form className="main_form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => checkEmail(e)}
              placeholder="E-mail"
            />
            {validate == false && (
              <Form.Text id="text" style={{ color: "red" }}>
                Incorrect email
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          {validate == false ? (
            <Button disabled variant="outline-dark" type="submit">
              Submit
            </Button>
          ) : (
            <Button onClick={click} variant="outline-dark" type="submit">
              Submit
            </Button>
          )}
        </Form>
      )}
    </>
  );
};

export default Registration;
