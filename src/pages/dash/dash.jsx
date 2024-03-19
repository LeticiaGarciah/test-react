import React, { useState, useEffect } from "react";
import "./dash.scss";
import logo from "../../assets/img/logo.png";

const Dashboard = () => {
  return (
    <div class="container">
      <div class="content">
        <section class="sidebar">
          <div class="logo">
            <img src={logo} alt={logo} />
          </div>

          <header className="title">
            <div class="icon">
              <i class="fa fa-bell-o" aria-hidden="true"></i>
            </div>
          </header>

          <nav>
            <li>
              <button className="button">Estatística</button>
              <button className="button">Área de Trabalho</button>
              <button className="button">Cadastro</button>
              <button className="button">Permissões</button>
            </li>

            <br></br>
            <br></br>
            <br></br>
            <i className="bi bi-person-circle"></i>
            <p className="user"> Nome Civil (Nome Parlamentar)</p>
          </nav>
        </section>
        <main>
          <div></div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
