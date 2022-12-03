import React from 'react';
import ReactPlayer from 'react-player';

import ReactWhatsapp from 'react-whatsapp';
import { ACCHIEVEMENT, ABOUT, MEDALS, STARS } from '../utils/copy';
import star from '../assets/star.svg';
import wpp from '../assets/wpp.svg';
import medal from '../assets/medal.svg';
import fit from '../assets/fit.svg';
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
        QUERO IR AO EVENTO <img src={wpp} alt='Whatsapp'></img>
      </ReactWhatsapp>
    </div>
  );
};

const ABOUTCm = () => {
  return (
    <div className='ABOUT'>
      <h1>QUEM É O SEU TUTOR</h1>
      {ABOUT.map((acc) => (
        <p className='Skill'>{acc}</p>
      ))}
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

        <ABOUTCm></ABOUTCm>
        <Medals />
        <div className='Row stars'>
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

const Achievement = () => {
  return (
    <React.Fragment>
      {ACCHIEVEMENT.map((acch) => (
        <div className='Achievement'>
          <p>{acch}</p>
          <img src={fit} alt='' />
        </div>
      ))}
    </React.Fragment>
  );
};

const Accomplishment = () => {
  return (
    <div className='Accomplishment'>
      <ReactWhatsapp
        className='CTABtn'
        number='+55-35-9202-5067'
        message='QUERO PARTICIPAR DO EVENTO'
        style={{ width: '100%' }}
      >
        QUERO PARTICIPAR <img src={wpp} alt='Whatsapp'></img>
      </ReactWhatsapp>
      <h1>FIVE STARS JIU JITSU</h1>
      <h2>Ajuda pessoas a se desenvolverem mais do que pensam que são</h2>

      <span className='ROW'>
        <h1>MÉTODO DE ENSINO SPRINT DE RESULTADOS </h1>
        <h3>Transforma 3 dias de frustração em 1 dia de resultado </h3>
      </span>
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
        style={{ transform: 'scale(1.03)', paddingBottom: '10px' }}
        height='85vh'
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
