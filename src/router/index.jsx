import useToken from "@hooks/useToken";
import useNavigate from "@hooks/useNavigate";

import Navegacion from "@components/Navegacion";
import Footer from "@components/Footer";

import Login from "@pages/Login";
import Logout from "@pages/Logout";
import Home from "@pages/Home";
import Nations from "@pages/Nations";
import Dashboard from "@pages/Dashboard";
import Posts from "@pages/Posts";

const routes = {
  "/": {
    component: Home,
    requiresAuth: false,
  },
  "/nations": {
    component: Nations,
    requiresAuth: false,
  },
  "/dashboard": {
    component: Dashboard,
    requiresAuth: true,
  },
  "/posts": {
    component: Posts,
    requiresAuth: true,
  },
  "/login": {
    component: Login,
    requiresAuth: false,
  },
  "/logout": {
    component: Logout,
    requiresAuth: false,
  },
};

function Router() {
  const { token } = useToken();
  const { page } = useNavigate();

  let CurrentPage = () => <h1>404 Página no encontrada 🥲</h1>;

  if (routes[page]) {
    if (routes[page].requiresAuth && !token) {
      CurrentPage = Login;
    } else {
      CurrentPage = routes[page].component;
    }
  }

  if (page == "/logout") {
    window.location.replace("/");
  }

  return (
    <div>
      <Navegacion />
      <div className="container mt-3">
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
          <CurrentPage />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Router;
