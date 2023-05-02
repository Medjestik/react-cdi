import React from 'react';
import './Document.css';
import { documents } from '../../utils/documents.js';

function Document() {

  const STEP_COUNT_DOCUMENT = 4;

  const [countDocument, setCountDocument] = React.useState(STEP_COUNT_DOCUMENT);

  function showMoreDocument() {
    setCountDocument(countDocument + STEP_COUNT_DOCUMENT);
  }

  React.useEffect(() => { 
    setCountDocument(STEP_COUNT_DOCUMENT);
  },[]);

  return (
    <section className='document' id='document'>
      <div className='container'>
        <h2 className='section__title'>База знаний</h2>
        <ul className='document__list'>
          {
            documents.slice(0, countDocument).map((elem, i) => (
              <li className='document__item' key={i}>
                <span className='document__item-tag'>{elem.tag}</span>
                <a className='document__item-title' href={elem.link} target='_blank' rel='noreferrer'>{elem.title}</a>
                <p className='document__item-caption'>{elem.caption}</p>
              </li>
            ))
          }
        </ul>
        {
          (documents.length > countDocument)
          &&
          <button className='document__btn' type='button' onClick={showMoreDocument}>Показать еще</button>
        }
        
      </div>
    </section>
  );
}

export default Document;