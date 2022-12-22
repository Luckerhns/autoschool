import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./components/Main/MainPage";
import Registration from "./components/SecondComponents/Registration/Registration";
import { Context } from "./State/CreateContext";
import { loginRoutes, publicRoutes } from "./utils/routes";
import { cards } from "./State/State";
import { MAIN_ROUTE, REGISTRATION_ROUTE } from "./utils/links";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Context.Provider value={{ cards, isLoading, setIsLoading }}>
      <BrowserRouter>
        {localStorage.getItem("token") ? (
          <Routes>
            {loginRoutes.map((e) => (
              <Route path={e.path} element={e.element} key={e.element} />
            ))}
            <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
          </Routes>
        ) : (
          <Routes>
            {publicRoutes.map((e) => (
              <Route path={e.path} element={e.element} key={e.path} />
            ))}
            <Route path="*" element={<Navigate to={REGISTRATION_ROUTE} />} />
            <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
          </Routes>
        )}
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;
