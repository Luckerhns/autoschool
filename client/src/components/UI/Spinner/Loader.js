import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import "./Loader.scss";

export const Loader = () => {
  return (
    <div className="spinner">
      <Spinner size="lr" variant="dark" animation="border" />
    </div>
  );
};

export const Gg = () => {
  const [isLoading, setIsLoading] = useState();
};
