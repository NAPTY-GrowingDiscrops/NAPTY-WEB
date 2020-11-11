import React from 'react';
import './InfoView.scss';

const InfoView = () => {
    return (
        <div className="all">
            <div className="mainBox">
                <div className="mainLeftBox">
                    <div className="leftTitle">
                        <div className="leftContent textFocus">게임 세계관</div>
                        <div className="leftContent">게임 조작법</div>
                        <div className="leftContent">병작물 도감</div>
                        <div className="leftContent">개발자 소개</div>
                    </div>
                </div>

                <div className="mainRightBox">
                    <div className="rightTopBox">
                        <div className="rightTopMenu focus">게임 세계관</div>
                        <div className="rightTopMenu unfocus">게임 조작법</div>
                        <div className="rightTopMenu unfocus">병작물 도감</div>
                        <div className="rightTopMenu unfocus">개발자 소개</div>
                    </div>

                    <div className="rightContentBox">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoView;