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

export const fetchAllStations = async () => {
  const { data: stations } = await api.get("/stations");
  const code = [];
  stations &&
    stations.payload.stations.filter((item) =>
      code.push({ value: item.Name, CrsCode: item.CrsCode })
    );
  return code;
};

export const fetchDetailStation = async (CsrCode) => {
  const { data: station } = await api.get(`/station?CrsCode=${CsrCode}`);
  return station;
};
