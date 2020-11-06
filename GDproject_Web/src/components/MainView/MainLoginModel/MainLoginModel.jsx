import React from 'react';
// import axios from 'axios';
// import SERVER from '../../../store/config';
// import { setToken } from '../../../lib/token';

import './logo.svg'
import './MainLoginModel.scss';

const MainLogin = () => {
    return (
        <div className='LoginBox'>
                <div className='loginInputBox'>
                    <input style={{ marginBottom: '10px' }} className='loginInput' type='text' placeholder='아이디' /> <br/>
                    <input className='loginInput' type='text' placeholder='비밀번호' /> <br />
                </div>
            <button className="loginBtn">로그인</button>
        </div>
    );
}

export default MainLogin;