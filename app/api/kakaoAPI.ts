import axios from "axios";


const rest_api_key:string ='580d11f3088c34e1b2f1115b3269a2e9'
const redirect_uri = 'http://localhost:5173/member/kakao'

const auth_code_path = `https://kauth.kakao.com/oauth/authorize`

const access_token_url = 'https://kauth.kakao.com/oauth/token'

export const getKakaoLoginLink = () => {

    const kakaoURL = `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`

    return kakaoURL
}


//access token 얻기
export const getAccessToken = async (authCode:string) => {

    const header = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }
    const params = {
        grant_type: "authorization_code",
        client_id: rest_api_key,
        redirect_uri: redirect_uri,
        code:authCode
    }

    const res = await axios.post(access_token_url, params , header)

    const accessToken = res.data.access_token

    return accessToken
}
