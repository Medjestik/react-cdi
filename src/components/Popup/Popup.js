import React from 'react';
import './Popup.css';

function Popup({ isOpen, onSubmit, formWidth, formName, children }) {

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className='scroll popup__container'>
        <form
          className={`popup__form popup__form_width_${formWidth}`}
          name={formName}
          action='#'
          noValidate
          onSubmit={onSubmit}
        >
          {children}
        </form>
      </div>
    </div>
  )
}

export default Popup;