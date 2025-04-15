import React from 'react';
import {Link} from "react-router";
import {getKakaoLoginLink} from "~/api/kakaoAPI";

function LoginPage() {

    const kakaoLink = getKakaoLoginLink()

    return (
        <div>
            <div className={'text-4xl'}>Login Page</div>

            <Link to={kakaoLink}>카카오</Link>

        </div>
    );
}

export default LoginPage;