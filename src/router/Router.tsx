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


export function Router() {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/perfil" element={<Perfil />}></Route>
        <Route path="/abilityForm" element={<AbilityForm />}></Route>
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    );
  }