import React from 'react';

import ViewBottom from '../../components/ViewBottom/ViewBottom';
import MainLogin from '../../components/MainView/MainLoginModel/MainLoginModel'

import logoPNG from './logo.png';
import img1 from './Img/background.jpg';
import arrowleft from './Img/arrowLeft.svg';
import './MainPage.scss';

const MainPage = () => {

  return (
    <div className="main">

		<div className="mainTop">
			<div className="mainBackground">
				<div className="mainContent">
					<img className='logo' src={logoPNG} alt="logo" />
				</div>
			</div>

			<div className="menu">
				<div className="downLoad">
					<div className="icon"></div>
				</div>

				<div className="menuTop">
					<div className="gameStart"></div>
				</div>

				<div className="menuBottom">

				</div>

				<div className="menuLogin">

				</div>
			</div>
		</div>
	</div>
    )
}

export default MainPage;