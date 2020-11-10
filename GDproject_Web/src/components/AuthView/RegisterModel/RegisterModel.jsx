import React, { useState } from 'react';
import axios from 'axios';

import SERVER from '../../../store/config';
import logo from '../logo_white.png';

import './RegisterModel.scss';

const RegisterPage = () => {

	const [name, setName] = useState('');
	const [CheckName, setCheckName] = useState(false);
	const [id, setId] = useState('');
	const [CheckId, setCheckId] = useState(false);
	const [pw, setPw] = useState('');
	const [CheckPw, setCheckPw] = useState(false);
	const [pwCheck, setPwCheck] = useState('');
	const [CheckPwCheck, setCheckPwCheck] = useState(false);
	const [email, setEmail] = useState('');
	const [CheckEmail, setCheckEmail] = useState(false)

	const nameCheck = async () => {
		if (name) {
			try {
				await axios.post(`${SERVER}/auth/register/nameCheck`, {
					name
				});
				setCheckName(true);
			} catch (err) {
				switch (err.response.status) {
					case 401:
						alert('이미 있는 닉네임입니다');
						break;
					default:
						console.log(err);
						alert('서버 오류');
				}
				setCheckName(false);
			}
		} else {
			setCheckName(false);
		}
	}
	
	const idCheck = async () => {
		if (id) {
			try {
				await axios.post(`${SERVER}/auth/register/idCheck`, {
					id
				});
				setCheckId(true);
			} catch (err) {
				switch (err.response.status) {
					case 401:
						alert('이미 있는 아이디입니다');
						break;
					default:
						console.log(err);
						alert('서버 오류');
				}
				setCheckId(false);
			}
		} else {
			setCheckId(false);
		}
	}

	const pwNormalization = async () => {
		if (pw) {
			try {
				await axios.post(`${SERVER}/auth/register/pwNormalization`, {
					pw
				});
				setCheckPw(true);
			} catch (err) {
				switch (err.response.status) {
					case 401:
						break;
					case 403:
						alert('영문자, 숫자, 특수문자(#?!@$%^&*-)를 하나 이상 사용하여 8자리 이상 입력해주세요');
						break;
					default:
						console.log(err);
						alert('서버 오류');
				}
				setCheckPw(false);
			}
		} else {
			setCheckPw(false);
		}
	}

	const emailCheck = async () => {
		if (email) {
			try {
				await axios.post(`${SERVER}/auth/register/mailCheck`, {
					email
				});
				setCheckEmail(true);
			} catch (err) {
				switch (err.response.status) {
					case 401:
						alert('이미 있는 이메일입니다');
						break;
					default:
						console.log(err);
						alert('서버 오류');
				}
				setCheckEmail(false);
			}
		} else {
			setCheckEmail(false);
		}
	}

	const register = async () => {
 
		alert('회원가입 버튼!!!!!');
	}

	return (
		<div className='RegisterPage'>
			<div className='logo'>
				<img className='logo_img' src={logo} alt='logo_white' /> 
			</div>

			<div className='input_boxes'>
				<p className='input_boxes_text'>이름</p>
				<input className='input_boxes_input' style={CheckName ? {border: '3px solid green'} : {border: '3px solid red'}} type="text" value={name} onChange={e => setName(e.target.value)} onBlur={e => nameCheck()} />
			</div>
			<div className='input_boxes'>
				<p className='input_boxes_text'>아이디</p>
				<input className='input_boxes_input' style={CheckId ? {border: '3px solid green'} : {border: '3px solid red'}} type="text" value={id} onChange={e => setId(e.target.value)} onBlur={e => idCheck()} />
			</div>
			<div className='input_boxes'>
				<p className='input_boxes_text'>비밀번호</p>
				<input className='input_boxes_input' style={CheckPw ? {border: '3px solid green'} : {border: '3px solid red'}} type="text" value={pw} onChange={e => setPw(e.target.value)} onBlur={e => pwNormalization()} />
			</div>
			<div className='input_boxes'>
				<p className='input_boxes_text'>비밀번호 확인</p>
				<input className='input_boxes_input' type="text" value={pwCheck} onChange={e => setPwCheck(e.target.value)}  />
			</div>
			<div className='input_boxes'>
				<p className='input_boxes_text'>이메일</p>
				<input className='input_boxes_input' style={CheckEmail ? {border: '3px solid green'} : {border: '3px solid red'}} type="email" value={email} onChange={e => setEmail(e.target.value)} onBlur={e => emailCheck()} />				
			</div>

			<div className='button_div'>
				<button className='button_button' onClick={e => register()}>
					회원가입
				</button>
			</div>
	</div>
	)
}

export default RegisterPage;
