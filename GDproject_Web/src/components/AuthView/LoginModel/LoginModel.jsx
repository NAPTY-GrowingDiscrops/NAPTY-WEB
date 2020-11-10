import React, { useState } from 'react';

import logo from '../logo_white.png'

import './LoginModel.scss'

const LoginModel = ({ setIsRegister }) => {

  const [id, setId] = useState('');
  const [pw, setPw] = useState(''); 

  return (
    <div className='LoginPage'>
      <div className='logo'>
        <img className='logo_img' src={logo} alt='logo_white' /> 
      </div>

      <div className='input_boxes'>
       
        <p className='input_boxes_text'>이름</p>
        <input className='input_boxes_input' type='text' value={id} onChange={e => setId(e.target.value)} />

        <p className='input_boxes_text' style={{ marginTop: '16px' }}>비밀번호</p>
        <input className='input_boxes_input' type='text' value={id} onChange={e => setId(e.target.value)} />

      </div>

      <div className='login_button_div'>
        
      </div>

    </div>
  )
}

export default LoginModel;