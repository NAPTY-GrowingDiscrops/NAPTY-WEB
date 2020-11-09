import React from 'react'

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