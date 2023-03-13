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
