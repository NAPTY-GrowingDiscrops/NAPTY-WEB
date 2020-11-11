import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import LoginModel from '../../components/AuthView/LoginModel/LoginModel';
import RegisterModel from	'../../components/AuthView/RegisterModel/RegisterModel';
import { getToken } from '../../lib/token';

import './AuthPage.scss';

const AuthPage = () => {

	const [isLogin, setIsLogin] = useState(false);
	const [isRegister, setIsRegister] = useState(false);

	useEffect(() => {
		if (getToken()) {
			setIsLogin(true);
			console.log('이미 로그인 했습니다');
		}
	}, []);

	return (
		isLogin ?
			<Redirect to='/' />
		:	
		<div className='AuthPage'>
			<div className='register'>
				{ isRegister ?
					<div>
						<div className='register_back'></div>
						<div className='register_front'>
							<div className='register_box'>
								<RegisterModel setIsLogin={setIsLogin} />
							</div>
						</div>
					</div>
					: <div>
						<div className='login_back'></div>
						<div className='login_front'>
							<div className='login_box'>
								<LoginModel setIsRegister={setIsRegister} />
							</div>
						</div>
					</div>
				}
			</div>
		</div>
	)
}

export default AuthPage;