import React from 'react';

import img from './Introduce.svg';

import './IntroduceView.scss';

const IntroduceView = () => {
	return (
		<div className='introduce_img'>
			<embed className='introduce_img_1' src={img} alt='' />
		</div>
	)
}

export default IntroduceView;