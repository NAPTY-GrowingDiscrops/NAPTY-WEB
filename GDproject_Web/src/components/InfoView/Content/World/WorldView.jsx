import React from 'react';

import img from './World.svg';

import './WorldView.scss';

const WorldView = () => {
  return (
    <div>
      <embed src={img} alt='' />
    </div>
  )
}

export default WorldView;