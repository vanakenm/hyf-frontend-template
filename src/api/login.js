// import queryString from "./config/query.js";
import http from "./config/http.js";
const api = {

  post: (data) => {
    return http.post(`/auth/login/`, data);
  },
  //   getUser: (id, inputQuery) => {
  //     const query = queryString(inputQuery);
  //     return http.get(`/reservations/user/${id}${query}`);
  //   },
};

export default api;
