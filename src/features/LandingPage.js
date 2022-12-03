import React from 'react';
import ReactPlayer from 'react-player';

import ReactWhatsapp from 'react-whatsapp';
import {
  ACCHIEVEMENT,
  ACCOMPLISHMENT,
  MEDALS,
  METHODS,
  STARS,
  TARGETSUBJ,
} from '../utils/copy';
import star from '../assets/star.svg';
import wpp from '../assets/wpp.svg';
import medal from '../assets/medal.svg';

import './LandingPage.css';

export const LandingPage = () => {
  return <Main></Main>;
};

const Main = () => {
  return (
    <div className='Container'>
      <div className='Main'>
        <BackgroundStrap />
        <BackgroundInfo />
        <Content></Content>
      </div>
      <ReactWhatsapp
        className='CTABtn'
        number='+55-35-9202-5067'
        message='QUERO PARTICIPAR DO EVENTO'
      >
        Quero participar <img src={wpp} alt='Whatsapp'></img>
      </ReactWhatsapp>
    </div>
  );
};

const Content = () => {
  return (
    <React.Fragment>
      <div className='Row'>
        <InnerVideoDisplay></InnerVideoDisplay>
        <Accomplishment />
      </div>
      <div className='Column'>
        <div className='Row'>
          <Achievement />
        </div>
        <Target />
        <div className='Row'>
          <Card infoList={STARS} />
        </div>
      </div>
    </React.Fragment>
  );
};

const Medals = () => {
  return (
    <div className='Row medal-row'>
      {MEDALS.map((md) => (
        <div className='Medal'>
          <img src={medal} alt='' />
          <p>{md}</p>
        </div>
      ))}
    </div>
  );
};

const Card = ({ infoList }) => {
  return (
    <React.Fragment>
      {infoList.map((item) => (
        <div className='Card'>
          <img src={star} alt='' />
          {item.desc}
        </div>
      ))}
    </React.Fragment>
  );
};

const Target = () => {
  return (
    <div className='TargetSubj'>
      <h1>FIVE STARS É PARA VOCÊ</h1>
      {TARGETSUBJ.map((trg) => (
        <p>{trg}</p>
      ))}
    </div>
  );
};

const Achievement = () => {
  return (
    <React.Fragment>
      {ACCHIEVEMENT.map((acch) => (
        <div className='Achievement'>
          <p>{acch}</p>
        </div>
      ))}
    </React.Fragment>
  );
};

const Accomplishment = () => {
  return (
    <div className='Accomplishment'>
      <h1>FIVE STARS</h1>
      {ACCOMPLISHMENT.map((acc) => (
        <span className='Skill'>{acc}</span>
      ))}
      <span className='Method'>
        <h2>Método de ensino</h2>
        <p>SPRINT DE RESULTADOS.</p>
        {METHODS.map((acc) => (
          <p>{acc}</p>
        ))}
      </span>
      <Medals />
    </div>
  );
};

const InnerVideoDisplay = () => {
  return (
    <div className='Video_Container'>
      <ReactPlayer
        controls={true}
        url='https://youtu.be/iR8X8nfhhn4'
        autoPlay
        style={{ transform: 'scale(1.03)' }}
        height='90vh'
      />
    </div>
  );
};

const BackgroundStrap = () => {
  return <div className='BackgroundStrap'></div>;
};

const BackgroundInfo = () => {
  return (
    <div className='BackgroundInfo'>
      ️Dia 10/12, sábado - das 10:10 as 11:50 - na academia strongfight (Vicent
      Simões, 1250){' '}
    </div>
  );
};
