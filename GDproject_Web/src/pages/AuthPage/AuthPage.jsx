import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import LoginModel from '../../components/AuthView/LoginModel/LoginModel';
import RegisterModel from	'../../components/AuthView/RegisterModel/RegisterModel';
import { getToken } from '../../lib/token';

import './AuthPage.scss';

const AuthPage = ({ match }) => {

	const [isLogin, setIsLogin] = useState(false);
	const [isRegister, setIsRegister] = useState(false);

	useEffect(() => {
		const bool = match.params.bool;
		if (getToken()) {
			setIsLogin(true);
			console.log('이미 로그인 했습니다');
		}
		if (bool === '1') {
			setIsRegister(true);
		}
	}, [match]);

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
								<RegisterModel setIsRegister={setIsRegister} />
							</div>
						</div>
					</div>
					: <div>
						<div className='login_back'></div>
						<div className='login_front'>
							<div className='login_box'>
								<LoginModel setIsLogin={setIsLogin} setIsRegister={setIsRegister} />
							</div>
						</div>
					</div>
				}
			</div>
		</div>
	)
}

export default AuthPage;