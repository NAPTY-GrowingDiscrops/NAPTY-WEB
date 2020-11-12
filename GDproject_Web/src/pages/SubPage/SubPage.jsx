import React from 'react';

import Navigator from '../../components/Navigator/Navigator';
import InfoView from '../../components/InfoView/InfoView';
import ViewBottom from '../../components/ViewBottom/ViewBottom';

import './SubPage.scss';

const  IntroducePage = () => {
  return (
    <div>
      <Navigator />
      <InfoView />
      <ViewBottom />
    </div>
  )
}

export default IntroducePage;