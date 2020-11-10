import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './Navigator.scss';
import logoPNG from '../../pages/MainPage/logo.png';

const ViewTop = () => {
    return (
		<div className="all">
			<div className="topBox">
                <div className="top">
                    <div className="logoBox">
				        <img className='logo' src={logoPNG} alt="Logo" />
			        </div>

                    <div className="menu">
                        <div className="menuTop">
                            <div className="menuContent">
                                <a href='' className="menuContents">게임정보</a>
                                <a href='' className="menuContents">게시판</a>
                                <a href='' className="menuContents">고객센터</a>
                                <button className="logout">로그아웃</button>
                                <div className="info">
                                    <p className="name">박상아<span className="sla">님</span></p>
                                    <div className="profile"></div>
                                </div>
                            </div>
                        </div>

                        <div className="menuBottom">
                            <p className="gameStart">게임시작</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTop;