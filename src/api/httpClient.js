import axios from 'axios'
import logRequestInfo from './interceptorRequest/logRequestInfo'
import logResponseInfo from './interceptorResponse/logResponseInfo'

const httpClient = axios.create({
    baseURL: process.env.VUE_APP_URL,
    headers: {
        "Content-Type": "application/json",
    }
})

httpClient.interceptors.request.use(logRequestInfo, err => Promise.reject(err))
httpClient.interceptors.response.use(logResponseInfo, err => Promise.reject(err))

export default httpClient;