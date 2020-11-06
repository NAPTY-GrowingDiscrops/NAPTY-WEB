import React from 'react';

import ViewBottom from '../../components/ViewBottom/ViewBottom';
import MainLogin from '../../components/MainView/MainLoginModel/MainLoginModel'

import logoPNG from './logo.png';
import img1 from './Img/background.jpg';
import './MainPage.scss';

const MainPage = () => {

  return (
    <div className='Main'>
      
      <div className='content'>
				<div className='logo_div'>
     	   <embed src={logoPNG} className='logo' />
    	  </div>
				<div className='buttons'>
					
				</div>
        <div className='top_img'>
          <img src={img1} className='img_file' alt="mainPic"/>
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