import { getUserLocalStorage } from "../context/authProvider/util";
import api from "./api";

export const apiRequest = async () => {
  try {
    const response = await api.get("/users/logged");
    return response.data;
  } catch (error: any) {
    if (error.message === "Failed to refresh token") {
      return "Failed to refresh token";
    }
  }
};

export const isAuthenticatedAdmin = async () => {
  const data = await apiRequest();
  if (data && data.roles && data.roles.length > 0) {
    for (let i = 0; i < data.roles.length; i++) {
      if (data.roles[i].name === "ROLE_ADMIN") {
        return "true";
      }
    }
  }
  if (data === "Failed to refresh token") {
    return "Failed to refresh token";
  }
  return "false";
};


export const isAuthenticated = async () => {
  const data = await apiRequest();
  if (data && data.roles && data.roles.length > 0) {
    for (let i = 0; i < data.roles.length; i++) {
      if (data.roles[i].name === "ROLE_USER") {
        return "true";
      }
    }
  }
  if (data === "Failed to refresh token") {
    return "Failed to refresh token";
  }
  return "false";
};

export const isLogged = () => {
  const user = getUserLocalStorage();
  if (user === undefined || user === null) {
    return false;
  }
  return true;
};

// apiRequest: realiza uma chamada à API utilizando o método GET para /users/logged. Caso a chamada seja bem-sucedida, retorna os dados recebidos. Caso ocorra um erro, verifica se a mensagem do erro é "Failed to refresh token" e retorna essa mensagem em caso positivo.
// isAuthenticatedAdmin: verifica se o usuário autenticado possui a permissão ROLE_ADMIN. Para isso, chama a função apiRequest e verifica se o objeto retornado possui a propriedade roles e se alguma das suas entradas possui o valor ROLE_ADMIN.
// isAuthenticated: verifica se o usuário autenticado possui a permissão ROLE_USER. Para isso, chama a função apiRequest e verifica se o objeto retornado possui a propriedade roles e se alguma das suas entradas possui o valor ROLE_USER.
// isLogged: verifica se há um usuário autenticado armazenado no localStorage. Retorna false se não houver usuário armazenado e true caso contrário.
// Essas funções são utilizadas para autenticar usuários em diferentes níveis de acesso e verificar se um usuário está autenticado.