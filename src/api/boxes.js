import http from "./config/http.js";
const api = {
  put: (data) => {
    return http.put(`/boxes/add-boxes/`, data);
  },
  //   getUser: (id, inputQuery) => {
  //     const query = queryString(inputQuery);
  //     return http.get(`/reservations/user/${id}${query}`);
  //   },
};

export default api;

