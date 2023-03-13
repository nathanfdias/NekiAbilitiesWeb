import { useContext } from "react";
import { AuthContext } from "../context/authProvider/index";

export const useAuth = () => { 
    const context = useContext(AuthContext);

    return context; 
}