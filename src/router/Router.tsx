import { Route, Routes} from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Login/Register";
import { Catalog } from "../pages/Catalog";

export function Router() {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
      </Routes>
    );
  }