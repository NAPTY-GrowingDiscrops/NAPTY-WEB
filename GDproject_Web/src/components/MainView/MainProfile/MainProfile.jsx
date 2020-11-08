import React from 'react';

import './MainProfile.scss';

const MainProfile = ({ setIsLogin }) => {

    const logout = async () => {
        alert('로그아웃 성공!');
        setIsLogin(false);
    }

    return (
        <div>
            <div className="profilePic">

            </div>

            <div className="profileContent">
                <div className="profileContentTop">
                    <p className="profileName">박상아<span className="profileN">님</span></p>
                </div>

                <div className="profileContentBottom">
                    <a className="mainInfo" href="">내정보</a> <span className="mainInfo">|</span> <a className='mainInfo' href="">계정관리</a>
                    <button className="logout" onClick={e => logout()}>로그아웃</button>
                </div>
            </div>
        </div>
    );

}

export default MainProfile;