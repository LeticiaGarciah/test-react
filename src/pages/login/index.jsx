import React from "react";
import "./styles.scss";

const Login = () => {
  return (
    <div className="login">
      <h1>Seja Bem Vindo</h1>
      <form method="post">
        <input
          type="text"
          name="u"
          placeholder="Username"
          required="required"
        />

        <input
          type="password"
          name="p"
          placeholder="Password"
          required="required"
        />

        <button type="submit" className="btn btn-primary btn-block btn-large">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;