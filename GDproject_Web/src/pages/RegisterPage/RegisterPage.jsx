import React, { useState } from 'react';

import logo from './logo_white.png';
import './RegisterPage.scss';

const RegisterPage = () => {

	const [name, setName] = useState('');

	const idCheck = (name) => {
		setName(name);

	}

	const register = async () => {

		alert('회원가입 버튼!!!!!');
	}

	return (
		<div className='RegisterPage'>
			<div className='register'>
				<div className='register_back'></div>
				<div className='register_front'>
					<div className='register_box'>
						<div className='logo'>
							<img className='logo_img' src={logo} alt='logo' />
						</div>

						<div className='input_boxes'>
							<p className='input_boxes_text'>이름</p>
							<input className='input_boxes_input' type="text" value={name} onChange={e => idCheck(e.targe.value)}/>
						</div>
						<div className='input_boxes'>
							<p className='input_boxes_text'>아이디</p>
							<input className='input_boxes_input' type="text"/>
						</div>
						<div className='input_boxes'>
							<p className='input_boxes_text'>비밀번호</p>
							<input className='input_boxes_input' type="text"/>						
						</div>
						<div className='input_boxes'>
							<p className='input_boxes_text'>비밀번호 확인</p>
							<input className='input_boxes_input' type="text"/>					
						</div>
						<div className='input_boxes'>
							<p className='input_boxes_text'>이메일</p>
							<input className='input_boxes_input' type="text"/>				
						</div>

						<div className='button_div'>
							<button className='button_button' onClick={e => register()}>
								회원가입
							</button>
						</div>
					</div>
				</div>
			</div>
	</div>
	)
}

export default RegisterPage;
