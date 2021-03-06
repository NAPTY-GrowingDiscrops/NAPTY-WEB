import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';


import SERVER from '../../../store/config';
import logo from '../logo_white.png'
import { setToken } from '../../../lib/token';

import './LoginModel.scss'

const LoginModel = ({ setIsLogin, setIsRegister }) => {

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState(''); 
  let token = ('');

  const login = async () => {
    if (!email) {
      alert('아이디를 확인해주세요');
      return ;
    }
    if (!pw) {
      alert('비밀번호를 확인해주세요');
      return;
    }
    try {
      const login = await axios.post(`${SERVER}/auth/login`, {
        email, pw
      });
      token = login.data.token.token;
    } catch (err) {
      setEmail('');
      setPw('');
      switch(err.response.status) {
        case 400:
          alert('아이디 혹은 비밀번호를 입력하지 않았습니다');
          break;
        case 401:
          alert('email이나 비밀번호를 확인해주세요');
          break;
        default:
          console.log(err);
          alert('서버 오류');
      }
      return;
    }

    try {
			await axios.post(`${SERVER}/auth/login/verifyCheck`, {
				token,
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

		token = ('');
		setEmail('');
		setPw('');
    setIsLogin(true);
    
  }

  return (
    <Router>
      <div className='LoginPage'>
        <div className='logo'>
          <Link to='' onClick={() => {window.location.href='/'}}><img className='logo_img' src={logo} alt="Logo" /></Link> 
        </div>

        <div className='input_boxes'>
        
          <p className='input_boxes_text'>이메일</p>
          <input className='input_boxes_input' type='text' value={email} onChange={e => setEmail(e.target.value)} />

          <p className='input_boxes_text' style={{ marginTop: '16px' }}>비밀번호</p>
          <input className='input_boxes_input' type='password' value={pw} onChange={e => setPw(e.target.value)} />

          <div className='boxes_ment'>
            <Link to='' className='menu_text' onClick={() => {alert('아직 구현이 안되어 있어요!')}}>아이디 찾기</Link>
            <span className='menu_text'> | </span>
            <Link to='' className='menu_text' onClick={() => {alert('아직 구현이 안되어 있어요!')}}>비밀번호 찾기</Link>
            <span className='menu_text'> | </span>
            <span className='menu_text' onClick={() => {setIsRegister(true)}}>회원가입</span>
          </div>

        </div>

        <div className='login_button_div'>
          <button className='button_button' onClick={e => login()}>
            로그인
          </button>
        </div>

      </div>
    </Router>
  )
}

export default LoginModel;