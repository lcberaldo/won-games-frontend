import axios from "axios";

const api = axios.create({
  baseURL: "https://won-games-backend.herokuapp.com/v1",
});

export default api;
