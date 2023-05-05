import React from 'react';
import './Competence.css';
import { competence } from '../../utils/competence.js';
import CompetencePopup from '../Popup/CompetencePopup/CompetencePopup.js';

function Competence() {

  const STEP_COUNT_PROGRAMS = 6;
  const [countCompetence, setCountCompetence] = React.useState(STEP_COUNT_PROGRAMS);

  const [currentCompetence, setCurrentCompetence] = React.useState({});

  const [isShowCompetencePopup, setIsShowCompetencePopup] = React.useState(false);

  function showMoreCompetence() {
    setCountCompetence(countCompetence + STEP_COUNT_PROGRAMS);
  }

  function showCompetencePopup(elem) {
    setCurrentCompetence(elem);
    setIsShowCompetencePopup(true);
  }

  function closeCompetencePopup() {
    setIsShowCompetencePopup(false);
  }

  React.useEffect(() => { 
    setCountCompetence(STEP_COUNT_PROGRAMS);
    return (() => {
      setCurrentCompetence({});
    })
  },[]);

  return (
    <section className='section competence' id='competence'>
      <div className='container'>
        <h2 className='section__title'>Компетенции</h2>
        <ul className='competence__list'>
          {
            competence.slice(0, countCompetence).map((elem, i) => (
              <li className='competence__item' key={i}>
                <div className='competence__item-row'>
                  <div className={`competence__item-icon competence__item-icon_type_${elem.index}`}></div>
                  <span className='competence__item-count'>{elem.count}</span>
                </div>
                <h4 className='competence__item-title'>{elem.title}</h4>
                <div className='competence__item-indicator' onClick={() => showCompetencePopup(elem)}>
                  <p className='competence__item-indicator-text'>Индикаторы</p>
                  <div className='competence__item-indicator-arrow'></div>
                </div>
              </li>
            ))
          }
        </ul>
        {
          (competence.length > countCompetence)
          &&
          <button className='competence__btn' type='button' onClick={showMoreCompetence}>Показать еще</button>
        }
      </div>

      {
        isShowCompetencePopup &&
        <CompetencePopup
          isOpen={isShowCompetencePopup}
          onClose={closeCompetencePopup}
          competence={currentCompetence}
        />
      }
    </section>
  );
}

export default Competence;
