import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import SERVER from '../../../store/config';
import { setToken } from '../../../lib/token';

import './logo.svg'
import './MainLoginModel.scss';

const MainLogin = ({ setIsLogin }) => {

	const [email, setEmail] = useState('');
	const [pw, setPw] = useState('');
	let token = ('');

	const login = async () => { 
		try {
			const login = await axios.post(`${SERVER}/auth/login`, {
				email, pw
			});
			token = login.data.token.token;
		} catch (err) {
			switch (err.response.status) {
				case 400:
					alert('아무것도 입력하지 않았습니다');
					break;
				case 401:
					alert('ID나 비밀번호를 확인해주세요');
					break;
				default:
					console.log(err);
					alert('서버 오류');
			}
			return ;
		}

		try {
			await axios.post(`${SERVER}/auth/login/verifyCheck`, {
				token
			});
			alert('로그인 성공!');
		} catch (err) {
			setEmail('');
			setPw('');
			switch (err.response.status) {
				case 401:
					alert('이메일 인증을 먼저 해주세요!');
					break;
				default:
					alert('서버 오류');
			}
			return ;
		}

		setToken(token);

		token = '';
		setEmail('');
		setPw('');
		setIsLogin(true);

	}

	return (
		<div className='LoginBox'>
			<button className="loginBtn" onClick={e => login()}>로그인</button>
			<div className='loginInputBox'>
				<input style={{ marginBottom: '10px' }} className='loginInput' type='text' placeholder='' value={email} onChange={e => setEmail(e.target.value)} /> <br/>
				<input className='loginInput' type='password' placeholder='비밀번호' value={pw} onChange={e => setPw(e.target.value)}/> <br />
			</div>
			<div className='boxes_ment'>
				<Link to='' className='menu_text' onClick={() => {alert('아직 구현이 안되어 있어요!')}}>아이디 찾기</Link>
				<span className='menu_text'> | </span>
				<Link to='' className='menu_text' onClick={() => {alert('아직 구현이 안되어 있어요!')}}>비밀번호 찾기</Link>
				<span className='menu_text'> | </span>
				<Link to='/auth'  className='menu_text' onClick={() => {window.location.href='/auth/1'}}>회원가입</Link>
        	</div>
		</div>
	);
}

export default MainLogin;