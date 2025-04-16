import axios, {AxiosError, type AxiosRequestConfig, type AxiosResponse, type InternalAxiosRequestConfig} from "axios";
import {getCookie} from "~/util/cookieUtil";

const jwtAxios = axios.create()

//before request
//요청 보내기 전에 추가 작업
const beforeReq = (config: InternalAxiosRequestConfig) => {
    console.log("before request.............")

    const accessToken = getCookie("access_token");

    config.headers.Authorization = `Bearer ${accessToken}`;


    return config
}
//fail request
const requestFail = (err: AxiosError) => {
    console.log("request error............")

    return Promise.reject(err)
}

//before return response
//성공적인 응답이 왔을 때 추가 작업
const beforeRes = async (res: AxiosResponse): Promise<AxiosResponse> => {
    console.log("before return response...........")

    return res
}

//fail response
//에러 상태 코드가 전달되었을 때 추가작업
const responseFail = (err: AxiosError) => {
    console.log("response fail error.............")
    console.log(err)

    //401 unauthorized
    if (err.status === 401) {
        const errorObj = err.response?.data as { msg?: string }

        if (errorObj?.msg) {
            const errorMsg: string = errorObj.msg
            console.log("에러 메시지:", errorMsg)
        }
    }


    return Promise.reject(err);
}

jwtAxios.interceptors.request.use( beforeReq, requestFail )

jwtAxios.interceptors.response.use( beforeRes, responseFail)

export default jwtAxios
