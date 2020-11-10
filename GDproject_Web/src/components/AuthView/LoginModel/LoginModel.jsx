import React from 'react';

import logo from '../logo_white.png'

const LoginModel = ({ setIsRegister }) => {
    return (
      <div className='LoginPage'>
				<div className='logo'>
					<img className='logo_img' src={logo} alt='logo_white' /> 
				</div>
				
      </div>
    )
}

export default LoginModel;