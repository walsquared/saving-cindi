import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './index.css';

// import Logo from './assets/logo.png';

// const Button = ({label, link}) => (
//   <a href={link} className='buttonContainer' target='_blank' rel='noopener noreferrer external'>
//     {label}
//   </a>
// );

const SocialLink = ({faIcon, label, link}) => (
  <a href={link} className='socialButton' target='_blank' rel='noopener noreferrer external'>
    <Icon icon={faIcon} size='lg'/>
  </a>
);

function App() {
  return (
    <>
      <div id='socialLinks'>
        <SocialLink faIcon={faTwitter} label='SavingCindi' link='https://twitter.com/savingcindi'/>
        <SocialLink faIcon={faEnvelope} label='booking@savingcindi.com' link='mailto:info@savingcindi.com'/>
        <SocialLink faIcon={faInstagram} label='savingcindi' link='https://www.instagram.com/savingcindi/'/>
      </div>
      {/* <img id='logo' src={Logo} alt='Saving Cindi Logo'/>
      <h1>SAVING CINDI</h1>
      <Button label='LISTEN' link='https://songwhip.com/album/the-experience/love-me'/> */}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));