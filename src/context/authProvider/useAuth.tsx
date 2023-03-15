import { useContext } from "react";
import { AuthContext } from ".";

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

// Este código define um hook personalizado useAuth que permite que os componentes acessem o contexto de autenticação definido em AuthContext. Ele utiliza a função useContext do React para obter o contexto e retorna o valor desse contexto para o componente que chama o hook useAuth.
//
// O hook useAuth pode ser usado em qualquer componente dentro da árvore de componentes envolvida pelo provedor AuthProvider. Quando o contexto é atualizado, o componente que chama o hook useAuth é atualizado automaticamente para refletir as alterações.
