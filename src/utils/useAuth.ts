import { useContext } from "react";
import { AuthContext } from "../context/authProvider/index";

export const useAuth = () => { 
    const context = useContext(AuthContext);

    return context; 
}

// Este código exporta uma função chamada useAuth que permite acessar o contexto de autenticação criado pelo AuthProvider do React.

// useContext é uma função do React que permite acessar o contexto de um determinado componente. Nesse caso, a função useAuth usa useContext para acessar o contexto AuthContext.

// O contexto AuthContext é criado pelo componente AuthProvider, que envolve toda a aplicação. Esse contexto contém informações de autenticação do usuário, como o token de acesso e o ID do usuário logado.

// A função useAuth retorna o contexto AuthContext, permitindo que os componentes filhos do AuthProvider possam acessar essas informações de autenticação sem a necessidade de passá-las explicitamente como props em cada componente.