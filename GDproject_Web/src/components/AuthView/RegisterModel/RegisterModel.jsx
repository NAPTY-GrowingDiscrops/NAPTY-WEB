import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import axios from 'axios';

import SERVER from '../../../store/config';
import logo from '../logo_white.png';
import check from './Check.svg';
import x from './X.svg';

import './RegisterModel.scss';

const RegisterPage = ({ setIsRegister }) => {

	const [name, setName] = useState('');
	const [CheckName, setCheckName] = useState(false);
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
          case 403:
            alert('닉네임은 7자리 이하여야 합니다.');
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

	const pwRecheck = async () => {
		if (pwCheck) {
			if (pw === pwCheck) {
				setCheckPwCheck(true);
			} else {
				alert('입력된 비밀번호가 다릅니다.');
				setCheckPwCheck(false);
			}
		} else {
			setCheckPwCheck(false);
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
						alert('이미 사용중인 이메일입니다');
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
		if (!CheckName) {
			alert('이름을 다시 확인해주세요.');
			return ;
		}
		if (!CheckPw) {
			alert('비밀번호를 다시 확인해주세요.');
			return;
		}
		if (!CheckPwCheck) {
			alert('비밀번호확인 항목을 다시 확인해주세요.');
			return;
		}
		if (!CheckEmail) {
			alert('email을 다시 확인해주세요.');
			return;
		}
		try {
			await axios.post(`${SERVER}/auth/register/`, {
				pw, name, email
			});
      alert('회원가입 성공! 가입할 때 사용한 메일로 인증해주세요');
      setIsRegister(false);
			await axios.post(`${SERVER}/auth/email/mailVerify`, {
				email,
      });
		} catch (err) {
			switch (err.response.status) {
				case 401:
					alert('하나라도 입력되지 않은 항목이 있습니다.');
					break;
				default:
					console.log(err);
					alert('서버 오류');
			}
		}
	}

	return (
		<Router>
			<div className='RegisterPage'>
				<div className='logo'>
					<Link to='' onClick={() => {window.location.href='/'}}><img className='logo_img' src={logo} alt="Logo" /></Link>
				</div>

				<div className='input_boxes' style={{ marginTop: "90px"}}>
					<p className='input_boxes_text'>이름</p>
					<div className='input_boxes_inputForm' style={CheckName ? {border: '2px solid green'} : {border: '2px solid red'}} >
						<input className='input_boxes_input' type="text" value={name} onChange={e => setName(e.target.value)} onBlur={e => nameCheck()} />
						<div className='check_logo'>
              <img className={CheckName?'input_Check_logo':'input_X_logo'} src={CheckName?check:x} alt='/' />
						</div>
					</div>
				</div>
        
        <div className='input_boxes'>
					<p className='input_boxes_text'>이메일</p>
					<div className='input_boxes_inputForm' style={CheckEmail ? {border: '2px solid green'} : {border: '2px solid red'}} >
						<input className='input_boxes_input' type="text" value={email} onChange={e => setEmail(e.target.value)} onBlur={e => emailCheck()} />
						<div className='check_logo'>
              <img className={CheckEmail?'input_Check_logo':'input_X_logo'} src={CheckEmail?check:x} alt='/' />
						</div>
					</div>
				</div>

        <div className='input_boxes'>
					<p className='input_boxes_text'>비밀번호</p>
					<div className='input_boxes_inputForm' style={CheckPw ? {border: '2px solid green'} : {border: '2px solid red'}} >
						<input className='input_boxes_input' type="password" value={pw} onChange={e => setPw(e.target.value)} onBlur={e => pwNormalization()} />
						<div className='check_logo'>
              <img className={CheckPw?'input_Check_logo':'input_X_logo'} src={CheckPw?check:x} alt='/' />
						</div>
					</div>
				</div> 

        <div className='input_boxes'>
					<p className='input_boxes_text'>비밀번호 확인</p>
					<div className='input_boxes_inputForm' style={CheckPwCheck ? {border: '2px solid green'} : {border: '2px solid red'}} >
						<input className='input_boxes_input' type="password" value={pwCheck} onChange={e => setPwCheck(e.target.value)} onBlur={e => pwRecheck()} />
						<div className='check_logo'>
              <img className={CheckPwCheck?'input_Check_logo':'input_X_logo'} src={CheckPwCheck?check:x} alt='/' />
						</div>
					</div>
				</div>

				<div className='button_div'>
					<button className='button_button' onClick={e => register()}>
						회원가입
					</button>
				</div>
			</div>
		</Router>
	)
}

export default RegisterPage;
