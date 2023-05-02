import React from 'react';
import './CompetencePopup.css';
import Popup from '../Popup.js';

function CompetencePopup({ isOpen, onClose, competence }) {

  function onSubmit(e) {
    e.preventDefault();
    onClose();
  }

  console.log(competence);

  return (
    <Popup
    isOpen={isOpen}
    onSubmit={onSubmit}
    formWidth={'large'}
    formName={'competence-popup'}
    >
      <span className='competence__item-count'>{competence.count}</span>
      <h4 className='competence-popup__title'>{competence.title}</h4>
      <ul className='competence-popup__list'>
        {
          competence.indicators.map((elem, i) => (
            <li className='competence-popup__item' key={i}>{competence.index}.{i + 1} {elem}</li>
          )) 
        }
      </ul>

      <button className='popup__btn-back' type='submit'>Назад</button>

    </Popup>
  )
}

export default CompetencePopup;