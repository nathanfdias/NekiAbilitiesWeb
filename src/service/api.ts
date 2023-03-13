import axios from "axios";
import {
  getUserLocalStorage,
  setUserLocalStorage
} from "../context/authProvider/util";

/* This is creating a new instance of axios with the baseURL and headers. */
const instance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

/* This is adding the access token to the header of the request. */
instance.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage();
    if (user !== null) {
      config.headers["Authorization"] = "Bearer " + user?.accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/* Intercepting the response and checking if the response is 401 (unauthorized) and if it is, it will
try to refresh the token. */
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const user = getUserLocalStorage();
    const originalConfig = err.config;

    if (
      originalConfig.url !== "/auth/signin" &&
      err.response &&
      originalConfig.url !== "/auth/refreshtoken"
    ) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await instance.post("/auth/refreshtoken", {
            refreshToken: user?.refreshToken,
          });
          setUserLocalStorage(rs.data);

          return instance(originalConfig);
        } catch (_error) {
          throw new Error("Failed to refresh token");
        }
      }
    }

    return Promise.reject(err);
  }
);

export default instance;