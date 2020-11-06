import React from 'react';

import ViewBottom from '../../components/ViewBottom/ViewBottom';
import MainLogin from '../../components/MainView/MainLoginModel/MainLoginModel'

import logoPNG from './logo.png';
import img1 from './Img/background.jpg';
import './MainPage.scss';

const MainPage = () => {

  return (
    <div className='Main'>
			

			<div className='logo_div'>
   	   <img src={logoPNG} className='logo' alt='logo'/>
  	  </div>
      <div className='content'>

				<div className='top'>
						<img src={img1} className='img_file' alt='mainPic' />
					</div>

				<div className='button'>
					<div className='button_box'>
						<div className='start'></div>
					</div>
				</div>

				<MainLogin className='LoginBox'/>

				<div className='boxes'>
					<div className='box1'>
						공지사항
					</div>
					<div className='box2'>
						인게임 사진
					</div>
				</div>
			</div>

    	<ViewBottom />

    	</div>
    )
}

export default MainPage;