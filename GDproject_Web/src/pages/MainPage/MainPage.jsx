import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import ViewBottom from '../../components/ViewBottom/ViewBottom';
import MainLogin from '../../components/MainView/MainLoginModel/MainLoginModel';
import MainProfile from '../../components/MainView/MainProfile/MainProfile';
import { getToken } from '../../lib/token';

import logoPNG from './logo.png';
import img1 from './Img/background.png';
// import arrowleft from './Img/arrowLeft.svg';
import pumkin from './Img/pinkPumkinWeb.png';
import download from './Img/download.png';

import './MainPage.scss';

const MainPage = () => {

	const [IsLogin, setIsLogin] = useState(false);

	useEffect(() => {
		if (getToken()) {
			setIsLogin(true);
		}
	}, []);

  return (
		<Router>
			<div className="all">

				<div className="mainTop">
					<div className="mainBackground">
						<div className="mainContent">
							<Link to='' onClick={() => {window.location.href='/'}}><img className='logo' src={logoPNG} alt="Logo" /></Link>
						</div>					
						<img className='main_image' src={img1} alt='mainImg1' />

						<div className='mainImage'>

						</div>

					</div>

					<div className="menu">
						<div className="downLoad">
							<div className="icon">
								<a href="/"><img src={download} alt="download"/></a>
							</div>
						</div>

						<div className="menuTop">
							<div className="gameStart"></div>
							<p className="gameStartMent">게임시작</p>
						</div>

						<div className="menuBottom">
							<div className="menuContent">
								<div className="menuBox">
									<div className="menuMent">
										<Link to='/gameInfo' className='menu_text' onClick={() => {window.location.href="/sub/gameInfo"}}>게임정보</Link>
										</div>
									<div className="menuMent">
										<Link to='' className='menu_text' onClick={() => {alert('아직 구현이 안되어 있어요!')}}>게시판</Link>
									</div>
									<div className="lastMenu">
										<Link to='' className='menu_text' onClick={() => {alert('아직 구현이 안되어 있어요!')}}>고객센터</Link>
									</div>
								</div>
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
		</Router>
  )
}

export default MainPage;