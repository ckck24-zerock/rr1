import axios, {AxiosError, type AxiosRequestConfig, type AxiosResponse, type InternalAxiosRequestConfig} from "axios";

const jwtAxios = axios.create()

//before request
const beforeReq = (config: InternalAxiosRequestConfig) => {
    console.log("before request.............")

    return config
}
//fail request
const requestFail = (err: AxiosError) => {
    console.log("request error............")

    return Promise.reject(err)
}

//before return response
const beforeRes = async (res: AxiosResponse): Promise<AxiosResponse> => {
    console.log("before return response...........")

    return res
}

//fail response
const responseFail = (err: AxiosError) => {
    console.log("response fail error.............")
    return Promise.reject(err);
}

jwtAxios.interceptors.request.use( beforeReq, requestFail )

jwtAxios.interceptors.response.use( beforeRes, responseFail)

export default jwtAxios
