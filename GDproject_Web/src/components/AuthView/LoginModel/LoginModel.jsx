import React, { useState } from 'react';
import axios from 'axios';

import SERVER from '../../../store/config';
import logo from '../logo_white.png'
import { setToken } from '../../../lib/token';

import './LoginModel.scss'

const LoginModel = ({ setIsLogin }) => {

  const [id, setId] = useState('');
  const [pw, setPw] = useState(''); 
  let token = {};

  const login = async () => {
    if (!id) {
      alert('아이디를 확인해주세요');
      return ;
    }
    if (!pw) {
      alert('비밀번호를 확인해주세요');
      return;
    }
    try {
      const login = await axios.post(`${SERVER}/auth/login`, {
        id, pw
      });
      token = login.data.token;
    } catch (err) {
      setId('');
      setPw('');
      switch(err.response.status) {
        case 400:
          alert('아이디 혹은 비밀번호를 입력하지 않았습니다');
          break;
        case 401:
          alert('ID나 비밀번호를 확인해주세요');
          break;
        default:
          console.log(err);
          alert('서버 오류');
      }
      return;
    }

    try {
			await axios.post(`${SERVER}/auth/login/verifyCheck`, {
				id 
			});
			alert('로그인 성공!');
		} catch (err) {
			setId('');
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

		setToken(token.token);

		token = {};
		setId('');
		setPw('');
		setIsLogin(true);
  }

  return (
    <div className='LoginPage'>
      <div className='logo'>
        <img className='logo_img' src={logo} alt='logo_white' /> 
      </div>

      <div className='input_boxes'>
       
        <p className='input_boxes_text'>이름</p>
        <input className='input_boxes_input' type='text' value={id} onChange={e => setId(e.target.value)} />

        <p className='input_boxes_text' style={{ marginTop: '16px' }}>비밀번호</p>
        <input className='input_boxes_input' type='text' value={pw} onChange={e => setPw(e.target.value)} />

      </div>

      <div className='login_button_div'>
        <button className='button_button' onClick={e => login()}>
          로그인
        </button>
      </div>

    </div>
  )
}

export default LoginModel;