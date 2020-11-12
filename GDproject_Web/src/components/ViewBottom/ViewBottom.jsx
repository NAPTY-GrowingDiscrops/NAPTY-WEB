import React from 'react';
import './ViewBottom.scss';
import lab from './img/lab_icon.png';
import plask from './img/plask.png';
import player from './img/player_face.png';

const ViewBottom = () => {
    return (
        <div className='bottom'>
            <div className='textbox'>
                <div className='name'>
                Growing Discrops | 병작물 키우기
                </div>
                <div className='explane'>
                OYOO의 첫번째 작품 병작물 키우기 입니다.
                </div>
            </div>
            <div className="iconBox">
                <img src={plask} alt="plask"/>
                <img className="plask" src={player} alt="player"/>
                <img className="lab" src={lab} alt="lab"/>
            </div>
        </div>
    );
}

export default ViewBottom;