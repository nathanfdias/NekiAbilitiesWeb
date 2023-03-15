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

const PrivateAdmin = ({ children }: PrivateAdminProps): JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = useState<String | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const auth = await isAuthenticatedAdmin();
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
  } else if (isAuthenticated === "true") {
    return <>{children}</>;
  } else if (isAuthenticated === "Failed to refresh token") {
    localStorage.removeItem("user");
    return <Navigate to="/login" />;
  } else {
    return <Navigate to="/forbidden" />;
  }
};

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
      <Route path="/perfil" element={<Perfil />}></Route>
      <Route path="/abilityForm" element={<AbilityForm />}></Route>
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}
