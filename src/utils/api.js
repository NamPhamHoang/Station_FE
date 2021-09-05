const axios = require('axios').default


const api = axios.create({
baseURL: '/api',
})

export const getUsers = () => {
    return api.get('/users').then(({data}) => {

        return data
    })
}

export const fetchAllStations = async () => {
    const { data: stations } = await api.get("/stations");
    return stations
 };
 
 export const fetchDetailStation = async (
     CsrCode
 ) => {
     const { data: station } = await api.get(`/station?CrsCode=${CsrCode}`);
     return station
 }