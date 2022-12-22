import React, { useContext, useEffect, useState } from "react";
import "./main.scss";
import Header from "../UI/Navbar/Navbar";
import { Loader } from "../UI/Spinner/Loader";
import Dropdown from "react-bootstrap/Dropdown";
import { mainContentSlider } from "../../State/State";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect((e) => {
    setTimeout((e) => setIsLoading(true), 1000);
  }, []);

  return (
    <>
      <Header />
      <div className="all">
        <h1 className="h1_text">Главная страница КСТ</h1>
        <div className="slider__content">
          {mainContentSlider.map((e) => (
            <Dropdown className="dropdown__content">
              <Dropdown.Toggle key={e.id}>{e.text}</Dropdown.Toggle>
              <Dropdown.Menu>
                {e.action.map((e) => (
                  <Dropdown.Item>{e.text}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;
