import { getUserLocalStorage } from "../context/authProvider/util";
import api from "./api";
/**
 * If the error message is 'Failed to refresh token', return 'Failed to refresh token', otherwise,
 * return the response data.
 * @returns The response.data or "Failed to refresh token"
 */
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

/**
 * It checks if the user is an admin by making an API call to the server.
 * @returns A promise.
 */
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

/**
 * It makes an API call to the server, and if the server returns a valid response, it returns true,
 * otherwise it returns false.
 * @returns A promise.
 */
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