import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import * as uuid from 'uuid';
import { removeToken, getToken } from '../../lib/token';
import { decoded } from '../../lib/decoded';

import './Navigator.scss';
import logoPNG from '../../pages/MainPage/logo.png';

const ViewTop = () => {

	const [isLogin, setIsLogin] = useState(false);
	const [name, setName] = useState(false);

	const logout = () => {
		setIsLogin(false);
		removeToken();
		alert('로그아웃 완료');
	}

	useEffect(() => {
		const token = getToken();
		if (token) {
			setIsLogin(true);
			const name = decoded(token);
			setName(name.name);
		} else {
			setIsLogin(false);
		}
	}, []);

		return (
			<Router>
				<div className="all">
					<div className="topBox">
						<div className="top">
							<div className="logoBox">
								<Link to='' onClick={() => {window.location.href='/'}}><img className='logo' src={logoPNG} alt="Logo"  /></Link>
							</div>

							<div className="menu">
								<div className="menuTop">
									<div className="menuContent">
										<Link to='' className='menuContents' onClick={() => {alert('아직 구현이 안되어 있어요!')}}>게임정보</Link>
										<Link to='' className='menuContents' onClick={() => {alert('아직 구현이 안되어 있어요!')}}>게시판</Link>
										<Link to='' className='menuContents' style={{ marginRight: '0px'}} onClick={() => {alert('아직 구현이 안되어 있어요!')}}>고객센터</Link>
										{ isLogin ?
											<div>
												<button className="logout" onClick={() => {logout()}}>로그아웃</button>
												<div className="info">
													<p className="name">{name}<span className="sla">님</span></p>
													<div className="profile"></div>
												</div>
											</div>
											: <button className="logout" onClick={() => {window.location.href=`/auth/${uuid.v4()}`}}>로그인</button>
										}
									</div>
								</div>

								<div className="menuBottom">
									<p className="gameStart">게임시작</p>
								</div>
							</div>
						</div>
					</div>
				</div>
		</Router>
	)
}

export default ViewTop;