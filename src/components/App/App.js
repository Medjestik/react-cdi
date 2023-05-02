import React from 'react';
import './App.css';
import Main from '../Main/Main.js';
import Competence from '../Competence/Competence.js';
import Document from '../Document/Document.js';
import Footer from '../Footer/Footer.js';

function App() {

  const [windowWidth, setWindowWidth] = React.useState(0);

  React.useEffect(() => {
    function resizeWindow (evt) {
      setWindowWidth(evt.target.innerWidth);
    }
    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow); 
    }
  }, []);

  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [windowWidth]);

  return (
    <div className='page'>
      <Main />
      <Competence />
      <Document />
      <Footer />
    </div>
  );
}

export default App;
