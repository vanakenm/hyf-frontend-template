import queryString from "./config/query.js";
import http from "./config/http.js";
const api = {
  get: (id, inputQuery) => {
    const query = queryString(inputQuery);
    return http.get(`/reservations/provider/${id}${query}`);
  },
  post: (data) => {
    return http.post(`/reservations/`, data);
  },
  getUser: (id, inputQuery) => {
    const query = queryString(inputQuery);
    return http.get(`/reservations/user/${id}${query}`);
  },
};

export default api;
