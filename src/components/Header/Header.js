import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-scroll';

function Header() {

  const [isColoredHeader, setIsColoredHeader] = React.useState(false);

  React.useEffect(() => {
    function scrollPage() {
      if (window.pageYOffset > 70) {
        setIsColoredHeader(true);
      } else {
        setIsColoredHeader(false);
      }
    }
    window.addEventListener('scroll', scrollPage);
    return () => {
      window.removeEventListener('scroll', scrollPage);
    }
  }, []);

  return (
    <header className={`header ${isColoredHeader ? 'header_type_color' : ''}`}>
      
      <div className='header__container'>   
        <img className='header__logo' src={logo} alt=' '></img>
        <nav className='header__nav'>
          <ul className='header__nav-list'>
            <li className='header__nav-item'>
              <Link className={`header__nav-text ${isColoredHeader ? 'header__nav-text_type_color' : ''}`} to='main' smooth={true} offset={0} duration={1000} spy={true}>Главная</Link>
            </li>
            <li className='header__nav-item'>
              <Link className={`header__nav-text ${isColoredHeader ? 'header__nav-text_type_color' : ''}`} to='competence' smooth={true} offset={-200} duration={1000} spy={true}>Компетенции</Link>
            </li>
            <li className='header__nav-item'>
              <Link className={`header__nav-text ${isColoredHeader ? 'header__nav-text_type_color' : ''}`} to='document' smooth={true} offset={-80} duration={1000} spy={true}>База знаний</Link>
            </li>
          </ul>
          <a className='header__nav-btn' href='https://dpo.emiit.ru/' target='_blank' rel='noreferrer'>Войти</a> 
        </nav>
      </div>

    </header>
  );
}

export default Header;
