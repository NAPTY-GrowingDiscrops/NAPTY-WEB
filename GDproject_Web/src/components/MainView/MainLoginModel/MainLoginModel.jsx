import React, { useState } from 'react';
import axios from 'axios';
import SERVER from '../../../store/config';
import { setToken } from '../../../lib/token';

import './logo.svg'
import './MainLoginModel.scss';

const MainLogin = ({ setIsLogin }) => {

	const [id, setId] = useState('');
	const [pw, setPw] = useState('');

	const login = async () => { 
		try {
			const resp = await axios.post(`${SERVER}/auth/login`, {
				id, pw
			});
			alert('로그인!');
		} catch (err) {
			setId('');
			setPw('');
			switch (err.response.status) {
				case 400:
			}
			alert('아이디나 비밀번호를 다시 확인해주세요');
		}

		// try {
		// 	const resp = await axios.post(`${SERVER}/auth/login/verifyCheck`, {
		// 		id 
		// 	});
		// 	alert('이메일 인증이 완료된 계정입니다!');
		// } catch (err) {
		// 	setId('');
		// 	setPw('');
		// 	alert('이메일 인증을 먼저 해주세요!');
		// 	return ;
		// }

		setId('');
		setPw('');
	}

	return (
		<div className='LoginBox'>
			<button className="loginBtn" onClick={e => login()}>로그인</button>
				<div className='loginInputBox'>
					<input style={{ marginBottom: '10px' }} className='loginInput' type='text' placeholder='아이디' value={id} onChange={e => setId(e.target.value)} /> <br/>
					<input className='loginInput' type='text' placeholder='비밀번호' value={pw} onChange={e => setPw(e.target.value)}/> <br />
				</div>
			</div>
		);
}

export default MainLogin;