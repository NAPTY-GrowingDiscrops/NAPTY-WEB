import React, { useState, useEffect } from 'react';

import ViewBottom from '../../components/ViewBottom/ViewBottom';
import MainLogin from '../../components/MainView/MainLoginModel/MainLoginModel';
import MainProfile from '../../components/MainView/MainProfile/MainProfile';
import { getToken } from '../../lib/token';

import logoPNG from './logo.png';
import img1 from './Img/background.jpg';
// import arrowleft from './Img/arrowLeft.svg';
import pumkin from './Img/pinkPumkinWeb.png';

import './MainPage.scss';

const MainPage = () => {

	const [IsLogin, setIsLogin] = useState(false);

	useEffect(() => {
		if (getToken()) {
			setIsLogin(true);
		}
	}, []);

  return (
    <div className="all">

			<div className="mainTop">
				<div className="mainBackground">
					<div className="mainContent">
						<img className='logo' src={logoPNG} alt="Logo" />
					</div>					
					<img className='main_image' src={img1} alt='mainImg1' />

					<div className='mainImage'>

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
						<div className="menuContent">

						</div>
					</div>

					
					<div className="menuLogin">
						{ 
						IsLogin ?
								<MainProfile setIsLogin={setIsLogin} />
							: <MainLogin setIsLogin={setIsLogin} />
						}
					</div>
				</div>

				<div className="content">
					<div className="noticeDec">
						<img className="dec" src={pumkin} alt="pumkin"/>
					</div>

					<div className="mainNotice">

					</div>

					<div className="mainPost">

					</div>
				</div>
				<div>
					<ViewBottom />
				</div>
			</div>
		</div>
  )
}

export default MainPage;