import React from 'react'

import './Navigator.scss';
import logo from '../../pages/MainPage/logo.png';

const ViewTop = () => {
    return (
			<div>
				<div className="topBox">
                    <div className="top">
                        <div className="logoBox">
                            <img className="logo" src={logo} alt=""/>
                        </div>
                    </div>
                </div>
			</div>
    )
}

export default ViewTop;