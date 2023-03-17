import { Route, Routes, Navigate } from "react-router-dom";
import { ReactNode, useEffect, useState } from "react";
import {
  isAuthenticatedAdmin,
  isAuthenticated,
  isLogged,
} from "../service/auth";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Login/Register";
import { Catalog } from "../pages/Catalog";
import { Perfil } from "../pages/Perfil";
import { AbilityForm } from "../pages/AbilityForm";
import { NotFound } from "../pages/NotFound";

type PrivateAdminProps = {
  children: ReactNode;
};

interface RoutesPath {
  path: string;
}

const PrivateRoute = ({ children }: PrivateAdminProps): JSX.Element => {
  const [isAuth, setIsAuthenticated] = useState<String | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const auth = await isAuthenticated();
        setIsAuthenticated(auth);
        setIsLoading(false);
      } catch (error) {
        setIsAuthenticated("false");
      }
    };
    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center" style={{ fontSize: "45px" }}>
        Loading...
      </div>
    );
  } else if (isAuth === "true") {
    return <>{children}</>;
  } else if (isAuth === "Failed to refresh token") {
    localStorage.removeItem("user");
    return <Navigate to="/" />;
  } else {
    return <Navigate to="/login" />;
  }
};

const IsLoggedIn = ({ children }: PrivateAdminProps): JSX.Element => {
  const auth = isLogged();

  if (!auth) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" />;
  }
};

const CacheTime = ({ children }: PrivateAdminProps): JSX.Element => {

  const cacheTime = localStorage.getItem('cacheTime');
  if (cacheTime) {
    const dateNow = Math.floor(Date.now() / 1000);
    const cacheTimestamp = parseInt(cacheTime); 

    if (dateNow >= cacheTimestamp) {
      localStorage.removeItem("user");
      localStorage.removeItem("cacheTime");
      return <Navigate to="/login" />;
    } else {
      return <>{children}</>;
    }
  }
  
  return <Navigate to="/login" />
};


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/login"
        element={
          <IsLoggedIn>
            <Login />
          </IsLoggedIn>
        }
      ></Route>
      <Route path="/register" element={ <IsLoggedIn><Register /></IsLoggedIn>}></Route>
      {/* <Route path="/catalog" element={<PrivateRoute><Catalog /></PrivateRoute>}></Route> */}
      <Route path="/catalog" element={<Catalog />}></Route>
      <Route path="/perfil" element={<CacheTime><Perfil /></CacheTime>}></Route>
      <Route path="/abilityForm" element={<CacheTime><AbilityForm /></CacheTime>}></Route>
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

// Esse código implementa a navegação em uma aplicação web usando React Router. Ele define uma série de rotas (routes) para diferentes URLs da aplicação, e cada rota especifica um elemento (element) que será renderizado quando o usuário acessar a URL correspondente.

// O componente Router é o componente raiz da navegação e contém uma lista de rotas definidas com o componente Routes. As rotas são definidas com o componente Route, que recebe uma prop path com a URL correspondente e uma prop element com o componente que será renderizado quando essa URL for acessada.

// O código também define três componentes personalizados para lidar com a autenticação e autorização de usuários: PrivateAdmin, PrivateRoute e IsLoggedIn.

// O componente PrivateAdmin verifica se o usuário autenticado é um administrador e só permite o acesso às rotas filhas se o usuário estiver autenticado e for um administrador. O componente PrivateRoute verifica se o usuário está autenticado e só permite o acesso às rotas filhas se o usuário estiver autenticado. O componente IsLoggedIn verifica se o usuário está autenticado e só permite o acesso às rotas filhas se o usuário não estiver autenticado.

// Cada componente de autenticação usa o useState para definir o estado de autenticação. Quando o componente é montado, ele chama a função checkAuth que verifica se o usuário está autenticado, e define o estado de autenticação de acordo. Quando a verificação de autenticação está em andamento, o componente renderiza uma mensagem "Loading...". Se o usuário não está autenticado ou não tem as permissões necessárias, o componente renderiza um redirecionamento para a página de login ou para uma página de acesso proibido.

// No geral, esse código implementa a navegação em uma aplicação web com React Router e adiciona recursos de autenticação e autorização. Ele usa os hooks useState e useEffect para gerenciar o estado e as atualizações de componentes.