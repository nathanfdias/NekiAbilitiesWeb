import { Route, Routes} from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Login/Register";
import { Catalog } from "../pages/Catalog";
import { Perfil } from "../pages/Perfil";
import { AbilityForm } from "../pages/AbilityForm";

export function Router() {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/perfil" element={<Perfil />}></Route>
        <Route path="/abilityForm" element={<AbilityForm />}></Route>
      </Routes>
    );
  }