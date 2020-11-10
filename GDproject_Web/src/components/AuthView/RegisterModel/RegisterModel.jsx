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
	const [checkPw, setCheckPw] = useState('');
	const [email, setEmail] = useState('');

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

	const pwCheck = (pw) => {
		alert(pw);
	}

	const emailCheck = (email) => {
		alert(email);
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
				<input className='input_boxes_input' type="text" value={pw} onChange={e => setPw(e.target.value)}/>
			</div>
			<div className='input_boxes'>
				<p className='input_boxes_text'>비밀번호 확인</p>
				<input className='input_boxes_input' type="text" value={checkPw} onChange={e => setCheckPw(e.target.value)}/>
			</div>
			<div className='input_boxes'>
				<p className='input_boxes_text'>이메일</p>
				<input className='input_boxes_input' type="text" value={email} onChange={e => setEmail(e.target.value)} />				
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
