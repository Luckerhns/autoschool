import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AUTOSTUDENT_ROUTE } from "../../utils/links";
import Header from "../UI/Navbar/Navbar";
import Card from "react-bootstrap/Card";
import "./Autoschool.scss";
import Container from "react-bootstrap/esm/Container";
import NavLink from "react-bootstrap/esm/NavLink";
import Button from "react-bootstrap/esm/Button";
import DarkVariantExample from "../UI/Slider/Slider";
import { Context } from "../../State/CreateContext";

const Autoschool = () => {
  const { cards } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="background">
      <Header />
      <Container className="main__content__header">
        <Card className="header">
          <Card.Body
            className="card__body"
            style={{ fontWeight: "bold", fontSize: "50px" }}
          >
            Сервисы нашей автошколы
          </Card.Body>
        </Card>
        <Container className="cards">
          {cards.map((p) => (
            <Card className={p.mainClass} bg={p.bg}>
              <Card.Body className={p.secondClass}>
                <Card.Title>{p.text}</Card.Title>
                <Button variant={p.buttonBg} onClick={(e) => navigate(p.link)}>
                  {p.linkText}
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </Container>
      <Container className="carousel__main">
        <DarkVariantExample />
      </Container>
    </div>
  );
};

export default Autoschool;
