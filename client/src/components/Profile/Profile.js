import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Nav from "react-bootstrap/Nav";
import "./Profile.scss";
import Header from "../UI/Navbar/Navbar";
import { profile } from "../../http/userAPI";
import { renderMatches } from "react-router-dom";

const Profile = () => {
  const [email, setData] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  const getFast = async () => {
    const token = localStorage.getItem("token");
    const data = await profile(token);
    setData(data.email);
    setUsername(data.username);
    setRole(data.role);
  };
  getFast();
  return (
    <>
      <Header />
      <Card
        style={{
          width: "18rem",
          display: "flex",
          width: "100%",
        }}
        className="profile__main__card"
      >
        <Card.Header className="main__profile">
          <h1>Your profile info</h1>
        </Card.Header>
        <ListGroup variant="flush" className="profile__items">
          <ListGroup.Item className="main__profile profile__items">
            Username: {username}
          </ListGroup.Item>
          <ListGroup.Item className="main__profile profile__items">
            Email: {email}
          </ListGroup.Item>
          <ListGroup.Item className="main__profile profile__items">
            your role: {role}
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Nav className="display-flex justify-content-end m-4">
        <Button variant="primary">Change your data</Button>
      </Nav>
    </>
  );
};

export default Profile;
