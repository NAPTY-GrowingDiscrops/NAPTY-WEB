import React, { useState } from 'react';

import Navigator from '../../components/Navigator/Navigator';
import InfoView from '../../components/InfoView/InfoView';
import ViewBottom from '../../components/ViewBottom/ViewBottom';

import './SubPage.scss';

const  IntroducePage = () => {

  const [gameInfo, setGameInfo] = useState(false);
  // const []

  return (
    <div>
      <Navigator gameInfo={gameInfo} setGameInfo={setGameInfo} />
      <InfoView />
      <ViewBottom />
    </div>
  )
}

export default IntroducePage;