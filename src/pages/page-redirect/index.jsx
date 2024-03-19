import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/sistema/estatisticas");
  }, []);

  return <Fragment />;
};

export default Redirect;
