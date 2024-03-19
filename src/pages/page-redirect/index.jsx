import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard/estatisticas");
  }, []);

  return <Fragment />;
};

export default Redirect;
