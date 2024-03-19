import {
  Routes as RoutesCompoent,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Layout from "../layout";
import Login from "../pages/login";
import Estatistics from "../pages/estatistics";
import Permissions from "../pages/permissions";
import Register from "../pages/register";
import Workspace from "../pages/workspace";
import Redirect from "../pages/page-redirect";

export const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesCompoent>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/sistema/estatisticas" element={<Estatistics />} />
          <Route path="/sistema/permissoes" element={<Permissions />} />
          <Route path="/sistema/cadastro" element={<Register />} />
          <Route path="/sistema/area-de-trabalho" element={<Workspace />} />
          <Route path="*" element={<Redirect />} />
        </Route>
      </RoutesCompoent>
    </BrowserRouter>
  );
};
