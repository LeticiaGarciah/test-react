import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

import logo from "../assets/img/logo.png";
import "./styles.scss";

const isAuthenticated = true;

const Layout = () => {
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/login");
  }

  return (
    <div class="container">
      <div class="content">
        <section class="sidebar">
          <div class="logo">
            <img src={logo} alt="logo teclegis" />
          </div>

          <nav>
            <ul class="menu-options">
              <li onClick={() => navigate("/dashboard/estatisticas")}>
                <i class="fa fa-home icon" aria-hidden="true"></i>
                &nbsp; Estatítica
              </li>
              <li onClick={() => navigate("/dashboard/area-de-trabalho")}>
                <i class="fa fa-paperclip icon" aria-hidden="true"></i>
                &nbsp; Área de trabalho
              </li>
              <li onClick={() => navigate("/dashboard/cadastro")}>
                <i class="fa fa-plus icon" aria-hidden="true"></i>
                &nbsp; Cadastro
              </li>
              <li onClick={() => navigate("/dashboard/permissoes")}>
                <i class="fa fa-wrench icon" aria-hidden="true"></i>
                &nbsp; Permissões
              </li>
            </ul>
          </nav>
        </section>

        <section class="main-content">
          <div class="app">
            <header class="sub-menu">
              <div class="title"> Projects </div>

              <div class="user-options">
                <div class="icon">
                  <i class="fa fa-bell-o" aria-hidden="true"></i>
                  <div class="badge"> 3 </div>
                </div>

                <div class="icon">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </div>
              </div>
            </header>

            <section class="app-content">
              <Outlet />
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Layout;
