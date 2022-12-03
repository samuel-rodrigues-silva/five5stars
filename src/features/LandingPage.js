import React from 'react';
import ReactPlayer from 'react-player';
import './LandingPage.css';

import star from '../assets/star.svg';
import wpp from '../assets/wpp.svg';
import medal from '../assets/medal.svg';
import ReactWhatsapp from 'react-whatsapp';

const STARS = [
  { desc: '️VALORIZAÇÃO E SATISFAÇÃO' },
  { desc: '️️PROMOÇÃO DO DESESTRESS E BEM ESTAR' },
  {
    desc: '️SEU DESENVOLVIMENTO AMPARADO PELA CIÊNCIA E COMPROVADO',
  },
  { desc: '️️PROFISSIONAL GABARITADO' },
  {
    desc: '️DESENVOLVIMENTO DE HABILIDADES E NEUTRALIZAÇÃO DE DEFEITO',
  },
];

const ATTACH = [
  {
    desc: 'O melhor projeto para você descobrir quem é, mais do que imagina é,  se chama FIVE STARS JJ. Quero te surpreender com a sofisticada entrega que o método SPRINT DE RESULTADOS, pode gerar na sua vida.',
  },
  {
    desc: 'Dia 10/12, sábado - das 10:10 as 11:50 - na academia strongfight (Vicent Simões, 1250) ',
  },
  {
    desc: '️️Você terá a oportunidade através desse convite, de saber exatamente como e quais são as promessas desse projeto a você. ',
  },
  { desc: 'Para se inscrever é gratuito, através do link na bio.' },
  {
    desc: '️Após inscrição aguarde para saber se houve confirmação de sua vaga. Serão apenas 20 vagas para fazer parte desse time 5 estrelas.',
  },
];

const MEDALS = [
  '2x PAN',
  '3x SUL AMERICANO',
  'MUNDIAL CBJJE',
  'IBJJF - EUROPE',
];

const METHODS = [
  'MÉTODO CONVENCIONAL - 76 min ativo + 20 intervalos = 96 min',
  'MÉTODO SPRINT DE RESULTADOS - 31 min ativo + 5 min intervalos = 36 min',
];

const ACCOMPLISHMENT = [
  'Há mais de 10 anos, vivi o JJ na mais alta performance, me desenvolvendo através de treinos que duravam 4 a 6 horas/dia 5x semana.',
  'Quem me ensinou possuía 30 anos de JJ old school, e o outro possuía uma didática digna de um chefe da PRF RJ-SP, ensinado em sua base por Royler Gracie.',
  ' Formado em ed.física e expert em experiência do cliente.',
];
const TARGETSUBJ = [
  'Extremamente atarefado com rotinas muito monótonas de trabalho.',
  'Se sente estressado devido as complicações no trabalho e em casa.',
  'Não desenvolveu habilidades da juventude que gostaria de ter. Sente que perdeu essa fase da vida, pelos compromissos, faculdade e/ou carreira.',
  'Não tem desafios novos para se motivar ao crescimento.',
  'Vive para a família e trabalho, e sente falta de um momento de homem na semana.',
];
const ACCHIEVEMENT = [
  'Se sentir desafiado a melhorar e fortalescer a cada dia.',
  'Sair do sedentarismo e se sentir bem, mais produtivo e energizado.',
  'Criar autoconfiança e reconhecer como ser capaz de realizar atos poderosos.',
  'Aliviar o estresse e se sentir mais no controle.',
  'Criar mais disciplina e deteminação para conquistar seu sonho.',
];

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
        {/* <div className='Row'>
          <Card infoList={ATTACH} />
        </div> */}
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
