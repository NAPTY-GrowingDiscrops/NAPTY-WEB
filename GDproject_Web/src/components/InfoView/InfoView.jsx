import React, { useState } from 'react';

import WorldView from	'./Content/World/WorldView';
import ControlView from './Content/Control/ControlView';
import IllustrateBookView from './Content/IllustrateBook/IllustrateBookView';
import IntroduceView from './Content/Introduce/IntroduceView';

import './InfoView.scss';

const InfoView = () => {

  const [world, setWorld] = useState(true);
  const [control, setControl] = useState(false);
  const [illustrateBook, setIllustrateBook] = useState(false);
  const [introduce, setIntroduce] = useState(false);

  const setChagne = (num) => {
    switch (num) {
      case 1:
        setWorld(true);
        setControl(false);
        setIllustrateBook(false);
        setIntroduce(false);
        break;
      case 2:
        setWorld(false);
        setControl(true);
        setIllustrateBook(false);
        setIntroduce(false);
        break;
      case 3:
        setWorld(false);
        setControl(false);
        setIllustrateBook(true);
        setIntroduce(false);
        break;
      case 4:
        setWorld(false);
        setControl(false);
        setIllustrateBook(false);
        setIntroduce(true);
        break;
      default:
        break;
    }
  }

  return (
    <div className="all">
      <div className="mainBox">
        <div className="mainLeftBox">
          <div className="leftTitle">
            <div className={world ? "leftContent textFocus" : "leftContent"} onClick={() => setChagne(1)}>게임 세계관</div>
            <div className={control ? "leftContent textFocus" : "leftContent"} onClick={() => setChagne(2)}>게임 조작법</div>
            <div className={illustrateBook ? "leftContent textFocus" : "leftContent"} onClick={() => setChagne(3)}>병작물 도감</div>
            <div className={introduce ? "leftContent textFocus" : "leftContent"} onClick={() => setChagne(4)}>개발자 소개</div>
          </div>
        </div>

        <div className="mainRightBox">
          <div className="rightTopBox">
            <div className={world ? "rightTopMenu focus" : "rightTopMenu unfocus"} onClick={() => setChagne(1)}>게임 세계관 </div>
            <div className={control ? "rightTopMenu focus" : "rightTopMenu unfocus"} onClick={() => setChagne(2)}>게임 조작법</div>
            <div className={illustrateBook ? "rightTopMenu focus" : "rightTopMenu unfocus"} onClick={() => setChagne(3)}>병작물 도감 </div>
            <div className={introduce ? "rightTopMenu focus" : "rightTopMenu unfocus"} onClick={() => setChagne(4)}>개발자 소개 </div>
          </div>

          <div className="rightContentBox">
            { world ?
							<WorldView />
              : null
            }

						{ control ?
							<ControlView />
							: null
						}

						{ illustrateBook ?
							<IllustrateBookView />
							: null
						}

						{ introduce ?
							<IntroduceView />
							: null
						}   
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoView;