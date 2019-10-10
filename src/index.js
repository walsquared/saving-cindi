import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {useSpring, animated} from 'react-spring'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { 
  faTwitter,
  faInstagram,
  faSpotify,
  faItunesNote,
  faAmazon,
} from '@fortawesome/free-brands-svg-icons';
import './index.css'

import Navbar from './navbar';
import {useMobile} from './hooks';
import LoveMe from './assets/loveMe.jpg';
import Logo from './assets/logo.png';
import TallPhoto from './assets/theGroup.jpg';
import WidePhoto from './assets/theGroup-wide.jpg';

const Button = ({label, link, className}) => (
  <a href={link} className={`buttonContainer ${className}`} target='_blank' rel='noopener noreferrer external'>
    {label.toUpperCase()}
  </a>
);

const GroupPhoto = () => {
  const isMobile = useMobile();

  if (isMobile) {
    return <img id='tallPhoto' src={TallPhoto} alt='Meet the group'/>;
  } else {
    return <img id='widePhoto' src={WidePhoto} alt='Meet the group'/>;
  }
};

const SocialLink = ({faIcon, label, link}) => (
  <a href={link} className='socialButton' target='_blank' rel='noopener noreferrer external'>
    <Icon icon={faIcon} size='lg'/>
  </a>
)

function App() {

  const Highlight = ({children}) => (
    <span style={{color: 'var(--accentColor)'}}>
      {children}
    </span>
  );
  
  const [isOn, toggle] = useState(false);
  const {rotation} = useSpring({rotation: isOn ? 540 : 0})

  return (
    <>
      <Navbar/>
      <div id='home'>
        <div id='promo'>
          <div id='loveMeOutline'>
            <img id='loveMeCover' src={LoveMe} alt='Love Me'/>
          </div>
          <Button label='listen' link='https://songwhip.com/album/the-experience/love-me'/>
        </div>
      </div>
      <div id='about'>
        <img id='logo' src={Logo} alt='Saving Cindi Logo'/>
        <h2>WE ARE SAVING CINDI</h2>
        <p>
        Established in April 2018, <Highlight>Saving Cindi</Highlight> is a band based in Ottawa, Canada. They specialize in <Highlight>R&B, Neo-Soul, and Jazz</Highlight>. <Highlight>Vocalist, Jhane Miller</Highlight> (also known as Vauhn) has been singing for over 10 years and has been classically trained in choral music. <Highlight>The bassist, Adam Saint-Fleur</Highlight> not only initiated the band, but has been playing piano for over 10 years. Finally, <Highlight>Étienne Auguste, the drummer</Highlight> has been playing for over 9 years. In October 2018, they released <Highlight>their debut single, Love Me</Highlight>. Since then, they have been working on a project expected to release <Highlight>next summer</Highlight>. Together, they are a group of people that have a <Highlight>burning passion for music</Highlight> and a desire to share it with everyone they meet. 
        </p>
        <GroupPhoto/>
        <div id='names'>
          <div className='name'>
            <h3>ADAM</h3>
            <h4>Keys</h4>
          </div>
          <div className='name'>
            <h3>VAUHN</h3>
            <h4>Vocals</h4>
          </div>
          <div className='name'>
            <h3>ÉTIENNE</h3>
            <h4>Keys</h4>
          </div>
        </div>
      </div>
      <div id='shows'></div>
      <div id='contact'>
        <img id='logoSmall' src={Logo} alt='Saving Cindi Logo'/>
        <div id='socialLinks'>
          <SocialLink faIcon={faTwitter} link='https://twitter.com/savingcindi'/>
          <SocialLink faIcon={faInstagram} link='https://www.instagram.com/savingcindi/'/>
          <SocialLink faIcon={faSpotify} link='https://open.spotify.com/artist/0kXWGYwMlgnhFVm3BZTJcY?si=cTBxgxJzQfqxFK-ZPz2tFw'/>
          <SocialLink faIcon={faItunesNote} link='https://music.apple.com/ca/artist/the-experience/1438057488'/>
          <SocialLink faIcon={faAmazon} link='https://music.amazon.com/artists/B00OUJBPZQ?ref=dm_sh_c37f-d13b-dmcp-df80-79c19&musicTerritory=US&marketplaceId=ATVPDKIKX0DER'/>
        </div>
        <Button label='info@savingcindi.com' className='emailButton' link='mailto:info@savingcindi.com'/>
        <div className='tailText'>
          Created with <span role='img' aria-label='love'>💖</span> by
          <a href='https://walcreates.ca'target='_blank' rel='noopener noreferrer external'>
            <Highlight> Wal Wal<Icon icon={faExternalLinkAlt} style={{paddingLeft: '5px'}}/></Highlight>
          </a>
        </div>
        <div className='tailText'>Copyright 2019 © Saving Cindi. All rights reserved.</div>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))