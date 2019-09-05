import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Logo from './assets/logo.png';

const Button = ({label}) => (
  <div className='buttonContainer'>
    {label}
  </div>
);

function App() {
  return (
    <>
      <img id='logo' src={Logo} alt='Saving Cindi Logo'/>
      <h1>SAVING CINDI</h1>
      <h4>NEXT SHOW</h4>
      <p>Rooster's Coffeehouse, Carleton University<br/>September 12th</p>
      <Button label='LISTEN'/>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));