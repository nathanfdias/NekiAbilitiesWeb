import axios from "axios";
import {
  getUserLocalStorage,
  setUserLocalStorage
} from "../context/authProvider/util";

/* Criação de nova instance com url e Headers. */
const instance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

/* Adiciona o token de acesso ao cabeçalho do pedido. */
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

/* Interceptar a resposta e verificar se ela é 401 (não autorizada) e, se for, tentar atualizar o token. */
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
      // Access Token estava expired
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

// Este código é um arquivo que exporta uma instância do Axios, uma biblioteca JavaScript para fazer requisições HTTP. A instância criada já possui a URL base da API definida como "http://localhost:8080" e o header padrão de "Content-Type" como "application/json".

// Em seguida, são adicionados dois interceptors, que são funções que são executadas antes ou depois da requisição ser feita. O primeiro interceptor adiciona o token de acesso ao header da requisição, caso o usuário esteja autenticado, usando a função "getUserLocalStorage()" do arquivo "authProvider/util".

// O segundo interceptor intercepta a resposta da requisição e verifica se ela retornou um erro de 401 (não autorizado), que indica que o token de acesso expirou. Nesse caso, ele tenta atualizar o token de acesso chamando a rota "/auth/refreshtoken" da API, usando a função "instance.post()". Se a atualização for bem-sucedida, o novo token de acesso é salvo no localStorage usando a função "setUserLocalStorage()" do arquivo "authProvider/util" e a requisição original é refeita com o novo token de acesso.

// Se a atualização do token de acesso falhar, uma exceção será lançada com a mensagem "Failed to refresh token".