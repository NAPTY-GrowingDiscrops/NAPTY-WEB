import React from 'react';

import ViewBottom from '../../components/ViewBottom/ViewBottom';

import './MainPage.scss';

const MainPage = () => {


  return (
    <div className='Main'>

        <div className='top'>
          
        </div>

        <div className='middle'>
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