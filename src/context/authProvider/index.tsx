import { createContext } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  async function authenticate(response: IUser) {
    if (response !== undefined) {
      setUserLocalStorage(response);
    }
  }

  const contextValue: IContext = {
    authenticate,
    accessToken: "",
    type: "",
    refreshToken: "",
    id: 0,
    username: "",
    email: "",
    roles: ["", ""],
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};


// AuthContext: um objeto createContext que fornece uma maneira de passar o estado e as ações de autenticação para componentes filhos usando o gancho useContext. Ele tem um valor inicial de um objeto vazio do tipo IContext.
// AuthProvider: um componente que envolve os componentes filhos e fornece o AuthContext para eles. Ele recebe uma propriedade children que representa os componentes filhos a serem envolvidos. Ele também define um objeto contextValue que contém o estado e as ações de autenticação, e retorna o componente AuthContext.Provider com o objeto contextValue passado como sua propriedade de valor.
// Os tipos IAuthProvider e IContext não são definidos neste módulo, mas provavelmente são definidos em outro lugar no código.

// A função authenticate recebe um objeto response do tipo IUser e o salva no armazenamento local usando a função setUserLocalStorage. Ela é marcada como async, mas na verdade não retorna nada.

// O objeto contextValue contém algumas propriedades que representam o estado de autenticação (accessToken, type, refreshToken, id, username, email e roles). Todas são inicializadas com valores vazios ou padrão. A função authenticate também é incluída no objeto contextValue, para que possa ser usada pelos componentes filhos.

// Em resumo, este módulo fornece uma maneira de gerenciar o estado de autenticação de um aplicativo React usando um padrão de contexto e provedor.