import axios from 'axios'

const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
})
request.interceptors.request.use(function(config) {
    config.headers.Authorization = `Token `
    return config
}, function(error) {
    return Promise.reject(error)
})

export default request