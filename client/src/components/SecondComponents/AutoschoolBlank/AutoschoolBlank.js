import React, { useEffect, useState } from "react";
import Header from "../../UI/Navbar/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import "./AutoschoolBlank.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { newStudent } from "../../../http/userAPI";
import jwt_decode from "jwt-decode";
import { Loader } from "../../UI/Spinner/Loader";

const AutoschoolBlank = () => {
  const [first, setFirst] = useState("");
  const [two, setTwo] = useState();
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  const [six, setSix] = useState("");
  const [seven, setSeven] = useState("");
  const [eight, setEight] = useState("");
  const [nine, setNine] = useState("");
  const [ten, setTen] = useState("");
  const [eleven, setEleven] = useState();
  const [data, setData] = useState([""]);
  const [isLoading, setIsLoading] = useState(false);

  const but2 = (e) => {
    setThree(`2: ${e.target.value}`);
  };

  const but3 = (e) => {
    setThree(`3: ${e.target.value}`);
  };

  const but4 = (e) => {
    setFour(`4: ${e.target.value}`);
  };

  const but5 = (e) => {
    setFive(`5: ${e.target.value}`);
  };

  const but6 = (e) => {
    setSix(`6: ${e.target.value}`);
  };

  const but7 = (e) => {
    setSeven(`7: ${e.target.value}`);
  };

  const but8 = (e) => {
    setEight(`8: ${e.target.value}`);
  };

  const but9 = (e) => {
    setNine(`9: ${e.target.value}`);
  };

  const but10 = (e) => {
    setTen(`10: ${e.target.value}`);
  };

  const but11 = (e) => {
    setEleven(`10: ${e.target.value}`);
  };

  const arred = [
    first,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
  ];

  const getData = async () => {
    setData(arred);
    const user = await jwt_decode(localStorage.getItem("token"));
    await newStudent(user.username, user.email, data);
  };
  useEffect(async (e) => {
    await getData();
    setIsLoading(true);
  }, []);

  return (
    <>
      {isLoading === true ? (
        <>
          <Header />
          <div className="main">
            <div className="h1__box">
              <h1>Анкета студента</h1>
            </div>
            <div className="main__content">
              1. Фамилия, Имя, Отчество
              <Form.Control
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                placeholder="Введите ФИО..."
                className="inp_text"
              />
            </div>
            <div className="main__content">
              2. Сколько вам лет?
              <Form.Control
                value={two}
                onChange={but2}
                type="text"
                placeholder="Введите возраст..."
                className="inp_text"
              />
            </div>
            <div className="main__content">
              3. Знаете ли вы об автошколе
              <InputGroup className="display-flex justify-content-end">
                Да -{" "}
                <InputGroup.Radio
                  onChange={but3}
                  name="two_question"
                  value="да"
                />
                Нет -{" "}
                <InputGroup.Radio
                  onChange={but3}
                  name="two_question"
                  value="нет"
                />
              </InputGroup>
            </div>
            <div className="main__content">
              4. Есть ли у вас водительское удостоверение?
              <InputGroup className="display-flex justify-content-end">
                Да -{" "}
                <InputGroup.Radio onChange={but4} name="driver" value="Да" />
                Нет -{" "}
                <InputGroup.Radio onChange={but4} name="driver" value="Нет" />
              </InputGroup>
            </div>
            <div className="main__content big__inp">
              5. Если у вас есть водительское удостоверение, то какакя категория
              у вас открыта?
              <div className="big_main_inp">
                Мотоцикл - категория А -{" "}
                <InputGroup.Radio
                  name="category_have"
                  onChange={but5}
                  value="Мотоцикл"
                />
                Легковой автомобиль - категория В -
                <InputGroup.Radio
                  value="Автомобиль легковой"
                  onChange={but5}
                  name="category_have"
                />
                Грузовой автомобиль - категория С -
                <InputGroup.Radio
                  onChange={but5}
                  value="Автомобиль грузовой"
                  name="category_have"
                />
              </div>
            </div>
            <div className="main__content">
              6. Планируете ли вы обучение в автошколе?
              <InputGroup className="display-flex justify-content-end">
                Да - <InputGroup.Radio value="Да" name="plan_study" />
                Нет - <InputGroup.Radio value="Нет" name="plan_study" />
              </InputGroup>
            </div>
            <div className="main__content big__inp">
              7. Какую категорию вы хотите получить?
              <div className="big_main_inp">
                Мотоцикл - категория А -{" "}
                <InputGroup.Radio name="category" value="Мотоцикл А" />
                Легковой автомобиль - категория В -
                <InputGroup.Radio name="category" value="Автомобиль В" />
                Грузовой автомобиль - категория С -
                <InputGroup.Radio name="category" value="Грузовик С" />
              </div>
            </div>
            <div className="main__content big__inp">
              8. В какое время плинируете начать обучение?
              <div className="main_big_inp">
                <div className="big_main_inp big__inp">
                  С мая{" "}
                  <InputGroup.Radio onChange={but8} name="month" value="Мая" />
                  С июня
                  <InputGroup.Radio onChange={but8} name="month" value="Июня" />
                  С июля
                  <InputGroup.Radio onChange={but8} name="month" value="Июля" />
                  С августа
                  <InputGroup.Radio
                    onChange={but8}
                    name="month"
                    value="Августа"
                  />
                </div>
                <div className="big_main_inp big__inp">
                  С сентября
                  <InputGroup.Radio
                    onChange={but8}
                    name="month"
                    value="Сентября"
                  />
                  С октября
                  <InputGroup.Radio
                    onChange={but8}
                    name="month"
                    value="Октября"
                  />
                  С ноября
                  <InputGroup.Radio
                    onChange={but8}
                    name="month"
                    value="Ноября"
                  />{" "}
                  С декабря
                  <InputGroup.Radio
                    onChange={but8}
                    name="month"
                    value="Декабря"
                  />
                </div>
              </div>
            </div>
            <div className="main__content">
              9. Есть возможность с 16 лет обучаться на категорию А1 -
              (квадроцикл, снегоход). Планируете ли вы обучение?
              <InputGroup className="display-flex justify-content-end">
                Да -{" "}
                <InputGroup.Radio
                  name="quadro_plans"
                  onChange={but9}
                  value="Да"
                />
                Нет -{" "}
                <InputGroup.Radio
                  name="quadro_plans"
                  onChange={but9}
                  value="Нет"
                />
              </InputGroup>
            </div>
            <div className="main__content big__inp">
              10. По какой из перечисленных профессий вы желаете пройти обучение
              в автошколе?
              <div className="display-flex justify-content-center main_big_inp">
                Тракторист машинист{" "}
                <InputGroup.Radio
                  name="driver_job"
                  onChange={but10}
                  value="тракторист"
                />
                Водитель погрузчика{" "}
                <InputGroup.Radio
                  name="driver_job"
                  onChange={but10}
                  value="погрузчик"
                />
                Машинист экскаватора{" "}
                <InputGroup.Radio
                  name="driver_job"
                  onChange={but10}
                  value="экскаватор"
                />
                Машинист бульдозера{" "}
                <InputGroup.Radio
                  name="driver_job"
                  onChange={but10}
                  value="бульдозер"
                />
              </div>
            </div>
            <div className="main__content">
              11. Контактный телефон?
              <Form.Control
                value={eleven}
                onChange={(e) => setEleven(e.target.value)}
                placeholder="Введите номер..."
                type="text"
                className="inp_text"
              />
            </div>
            <div className="m-5 but__div">
              <Button className="p-2" onClick={getData} variant="warning">
                Отправить заявку
              </Button>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default AutoschoolBlank;
