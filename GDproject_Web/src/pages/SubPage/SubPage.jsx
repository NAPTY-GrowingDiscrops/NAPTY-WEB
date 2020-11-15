import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Navigator from '../../components/Navigator/Navigator';
import InfoView from '../../components/InfoView/InfoView';
import ViewBottom from '../../components/ViewBottom/ViewBottom';

import './SubPage.scss';

const  IntroducePage = ({ match }) => {

  const [gameInfo, setGameInfo] = useState(false);
  const [post, setPost] = useState(false);
  const [customerHelp, setCustomerHelp] = useState(false);
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    const subPage = match.params.subPage;

    const ChangePage = (page) => {
      switch (page) {
        case "gameInfo":
          setGameInfo(true);
          setPost(false);
          setCustomerHelp(false);
          break;
        case "post":
          setGameInfo(false);
          setPost(true);
          setCustomerHelp(false);
          break;
        case "customerHelp":
          setGameInfo(false);
          setPost(false);
          setCustomerHelp(true);
          break;
        default:
          setIsReset(true);
      }
    }

    ChangePage(subPage);
  }, [match]);

  return (
    isReset ?
      <Redirect to='/' />
    : 
    <div>
      <Navigator gameInfo={gameInfo} setGameInfo={setGameInfo} post={post} setPost={setPost} customerHelp={customerHelp} setCustomerHelp={setCustomerHelp} />

      { gameInfo ?
        <InfoView />
        : null 
      }

      { post ?
        <div>게시글 파트</div>
        : null
      }

      { customerHelp ?
        <div>고객센터</div>
        : null
      }

      <ViewBottom />
    </div>
  )
}

export default IntroducePage;