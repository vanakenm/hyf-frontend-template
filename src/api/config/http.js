import { defaultEnvVariables } from "../../constants/variables.js";
const baseUrl =
  import.meta.env.REACT_API_BASE_URL || defaultEnvVariables.REACT_API_BASE_URL;
const baseURL = `${baseUrl}`;
const createHeader = () => {
  const token = sessionStorage.getItem("auth_token");
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
};
const get = (url) => {
  const options = {
    method: "GET",
    headers: createHeader(),
  };
  return fetch(`${baseURL}${url}`, options);
};
const post = (url, data) => {
  const options = {
    method: "POST",
    headers: createHeader(),
    body: JSON.stringify(data),
  };
  return fetch(`${baseURL}${url}`, options);
};
const put = (url, data) => {
  const options = {
    method: "PUT",
    headers: createHeader(),
    body: JSON.stringify(data),
  };
  return fetch(`${baseURL}${url}`, options);
};
const remove = (url) => {
  const options = {
    method: "DELETE",
    headers: createHeader(),
  };
  return fetch(`${baseURL}${url}`, options);
};
const filePost = (url, data) => {
  const token = sessionStorage.getItem("auth_token");
  const headers = {
    Accept: "*/*",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const options = {
    method: "POST",
    headers,
    body: data,
  };
  return fetch(`${baseURL}${url}`, options);
};
const postId = (url) => {
  const options = {
    method: "POST",
    headers: createHeader(),
  };
  return fetch(`${baseURL}${url}`, options);
};
export const globalFetch = {
  get,
  post,
  put,
  remove,
  filePost,
  postId,
};
export default globalFetch;
