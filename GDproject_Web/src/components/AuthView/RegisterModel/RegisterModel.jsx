import React, { useState } from 'react';

import logo from '../logo_white.png' 
import './RegisterModel.scss';

const RegisterPage = () => {

	const [name, setName] = useState('');
	const [id, setId] = useState('');
	const [pw, setPw] = useState('');
	const [checkPw, setCheckPw] = useState('');
	const [email, setEmail] = useState('');

	const nameCheck = () => {
		alert(name);
	}
	
	const idCheck = (id) => {
		alert(id);
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
				<input className='input_boxes_input' type="text" value={name} onChange={e => setName(e.target.value)}/>
			</div>
			<div className='input_boxes'>
				<p className='input_boxes_text'>아이디</p>
				<input className='input_boxes_input' type="text" value={id} onChange={e => setId(e.target.value)} />
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
