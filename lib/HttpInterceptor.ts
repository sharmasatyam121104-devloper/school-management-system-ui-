import axios from "axios"

const server = process.env.NEXT_PUBLIC_BASE_URL;

const HttpInterceptor = axios.create({
    baseURL: `${server}/api/v1`,
    withCredentials: true,
})

export default HttpInterceptor