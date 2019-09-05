import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './index.css';

import Logo from './assets/logo.png';

const Button = ({label, link}) => (
  <a href={link} className='buttonContainer'>
    {label}
  </a>
);

const SocialLink = ({faIcon, label, link}) => (
  <a href={link} className='socialButton'>
    <Icon icon={faIcon} size='lg'/>
    {label}
  </a>
);

function App() {
  return (
    <>
      <img id='logo' src={Logo} alt='Saving Cindi Logo'/>
      <h1>SAVING CINDI</h1>
      <h4>NEXT SHOW</h4>
      <p>Rooster's Coffeehouse, Carleton University<br/>September 12th</p>
      <Button label='LISTEN'/>
      <div id='socialLinks'>
        <SocialLink faIcon={faTwitter} label='@SavingCindi' link=''/>
        <SocialLink faIcon={faEnvelope} label='booking@savingcindi.ca' link=''/>
        <SocialLink faIcon={faInstagram} label='@savingcindi' link=''/>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));