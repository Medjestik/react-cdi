import React from 'react';
import './Main.css';
import video from '../../video/background.mpeg';
import Header from '../Header/Header.js';
import { Link } from 'react-scroll';

function Main() {

  return (
    <main className='main' id='main'>

      <div className='main__video-container'>
        <video className='main__video' preload='auto' loop={true} autoPlay={true} muted={true} >
          <source src={video} type='video/mp4' />
        </video>
      </div>

      <div className='main__overlay'></div>

      <Header />

      <div className='container'>
        <div className='main__container'>
          <h1 className='main__title'>Виртуальные мастер-классы</h1>
          <p className='main__subtitle'>Центральной дирекции инфраструктуры</p>
          <a className='main__btn' href='https://dpo.emiit.ru/' target='_blank' rel='noreferrer'>Войти</a>
          <Link className='main__arrow' to='competence' smooth={true} offset={-200} duration={1000} spy={true}></Link>
        </div>
      </div>

    </main>
  );
}

export default Main;
