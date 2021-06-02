import "whatwg-fetch";
import axios, { Method } from "axios";
import settings from "../settings";

interface Config {
  url?: string;
  method?: Method;
  token?: string;
  baseUrl?: string;
  headers?: {};
  options?: {};
  noAuth?: boolean;
  data?: {};
}

const httpClient = axios.create();
httpClient.defaults.timeout = 1200000;

export const webApi = settings.webApi;

export let token: string | null = "";
// export let dispatchRef;
let loggedOutUser = false;

token = localStorage.getItem("token");

export const _request = (
  url: string,
  method: Method,
  data: object,
  config: Config = {}
) => {
  // const headers = {...config.headers, Authorization: "Bearer " + accessToken};
  // if (config.noAuth) delete headers.Authorization;
  return httpClient({ url, method, data })
    .then((res) => {
      if (res.status === 200 || res.status === 201 || res.status === 204)
        return res.data;
      else throw res.data;
    })
    .catch((errorResponse) => {
      if (
        errorResponse.response.status === 401 &&
        errorResponse.response.data
      ) {
        // to avoid refresh in login and register pages
        // if (accessToken){
        //     cleanAll();
        //     window.location.reload();
        // }
      }
      throw errorResponse.response || { status: 500 };
    });
};

export const get = (url: string, config?: Config) =>
  _request(url, "GET", {}, config);

export const post = (url: string, body: {}, config?: Config) =>
  _request(url, "POST", body, config);

export const authGet = (url: string, config: Config) =>
  _request(url, "GET", {}, { ...config });

export const authPost = (url: string, body: {}) =>
  _request(url, "POST", body, undefined);

export const put = (url: string, body: {}, config: Config) =>
  _request(url, "PUT", body, config);

export const authPut = (url: string, body: {}, config: Config) =>
  _request(url, "PUT", body, { ...config });

export const patch = (url: string, body: {}, config: Config) =>
  _request(url, "PATCH", body, config);
//
export const deleteRequest = (url: string, body: {}, config: Config) =>
  _request(url, "DELETE", body, config);

export const services = {
  refreshToken: (token: string) => post(webApi + "auth/refresh/", { token }),
};

let interval = undefined;

export const setToken = (respToken: string, refreshToken?: string) => {
  localStorage.setItem("token", "Token " + respToken);
  localStorage.setItem("token-ts", Date.now().toString());
  token = "Token " + respToken;
};

export const setRefreshToken = (respToken: string) => {
  localStorage.setItem("refresh-token", respToken);
};

export const removeToken = () => {
  console.log("*** Removing token ***");
  localStorage.removeItem("token");
  localStorage.removeItem("token-ts");
  localStorage.removeItem("refresh-token");
  token = "";
};
