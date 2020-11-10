import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import RegisterModel from	'../../components/AuthView/RegisterModel/RegisterModel';
import { getToken } from '../../lib/token';

import './AuthPage.scss';

const AuthPage = () => {

	const [isLogin, setIsLogin] = useState(false);

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
				<div className='register_back'></div>
				<div className='register_front'>
					<div className='register_box'>
						<RegisterModel />
					</div>
				</div>
			</div>
		</div>
	)
}

export default AuthPage;