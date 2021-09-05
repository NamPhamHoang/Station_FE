const axios = require("axios").default;

const api = axios.create({
  baseURL: "/api",
});

export const getUsers = () => {
  return api.get("/users").then(({ data }) => {
    return data;
  });
};

export const getStations = () => {
  return api.get("/stations").then(({ data }) => {
    return data;
  });
};

export const getDetailStation = (CrsCode) => {
  return api.get(`/station?CrsCode=${CrsCode}`).then(({ data }) => {
    return data;
  });
};
