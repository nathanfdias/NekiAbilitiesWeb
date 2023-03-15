import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUserLocalStorage(): IUser | null {
  const json = localStorage.getItem("user");

  if (!json) {
    return null;
  }

  let object = null;
  try {
    object = JSON.parse(json);
  } catch (e) {
    localStorage.removeItem("user");
  }

  if (!isUserStorage(object)) {
    localStorage.removeItem("user");
    return null;
  }

  return object;
}

function isUserStorage(object: any): object is IUser {
  return (
    object &&
    typeof object.username === "string" &&
    typeof object.accessToken === "string" &&
    typeof object.type === "string" &&
    typeof object.refreshToken === "string" &&
    typeof object.id === "number" &&
    typeof object.email === "string" &&
    Array.isArray(object.roles)
  );
}

// Armazenagem e obtenção de dados de usuário na localStorage do navegador: setUserLocalStorage e getUserLocalStorage.

// A função setUserLocalStorage recebe um objeto user contendo as informações do usuário e o armazena na localStorage do navegador, convertendo o objeto para uma string JSON.

// A função getUserLocalStorage retorna o objeto armazenado na localStorage do navegador e o converte de volta para um objeto, verificando se o objeto contém as propriedades esperadas de um objeto de usuário.

// A função isUserStorage é uma função auxiliar usada pela getUserLocalStorage para verificar se o objeto retornado da localStorage é um objeto de usuário válido.