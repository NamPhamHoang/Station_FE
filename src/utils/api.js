const axios = require('axios').default


const api = axios.create({
baseURL: '/api',
})

export const getUsers = () => {
    return api.get('/users').then(({data}) => {

        return data
    })
}