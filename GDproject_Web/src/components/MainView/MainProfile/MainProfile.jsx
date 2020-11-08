import React, { useState , useEffect} from 'react';
import { getToken, removeToken } from '../../../lib/token';
import { decoded } from '../../../lib/decoded';

import './MainProfile.scss';

const MainProfile = ({ setIsLogin }) => {

  const [Name, setName] = useState('');

  const logout = async () => {
    alert('로그아웃 성공!');
    setIsLogin(false);
    removeToken();
  }

  useEffect(() => {
		const token = getToken();
		const name = decoded(token);
		setName(name.name);
	}, []);

    return (
        <div>
            <div className="profilePic">

            </div>

            <div className="profileContent">
                <div className="profileContentTop">
                    <p className="profileName">{Name}<span className="profileN">님</span></p>
                </div>

                <div className="profileContentBottom">
                    <a className="mainInfo" href="/">내정보</a> <span className="mainInfo">|</span> <a className='mainInfo' href="/">계정관리</a>
                    <button className="logout" onClick={e => logout()}>로그아웃</button>
                </div>
            </div>
        </div>
    );

}

export default MainProfile;