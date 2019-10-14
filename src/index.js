import React, {useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import {useInView} from 'react-intersection-observer';
import {animated, useChain, useSpring} from 'react-spring';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { 
  faTwitter,
  faInstagram,
  faSpotify,
  faItunesNote,
  faAmazon,
} from '@fortawesome/free-brands-svg-icons';

import Navbar from 'navbar';
import {useFadeIn, useMobile} from 'hooks';
import {Button} from 'components';
import {Background, Logo, LogoOutline, LoveMeCover, TallPhoto, WidePhoto} from 'assets';
import './index.css'

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

const Highlight = ({children}) => (
  <span style={{color: 'var(--accentColor)'}}>
    {children}
  </span>
);

const Home = () => {
  const [inViewRef, inView] = useInView();

  const drawRef = useRef();
  const drawStroke = useSpring({ref: drawRef, to: {strokeDashoffset: 0}, from: {strokeDashoffset: 1200}, config: {delay: 1500}})

  const fadeRef = useRef();
  const fadeIn = useSpring({ref: fadeRef, to: {opacity: 1}, from: {opacity: 0}})

  useChain(inView ? [drawRef, fadeRef] : [])

  return (
    <div id='home' ref={inViewRef}>
      <animated.img id='background' src={Background} alt='bkg' style={fadeIn}/>
      <div id='promo'>
        <div>
          <animated.img id='loveMeCover' src={LoveMeCover} alt='Love Me' style={fadeIn}/>
          <animated.svg id='loveMeOutline' style={drawStroke}>
            <rect width="100%" height="100%"/>
          </animated.svg> 
        </div>
      <Button
        label='listen'
        style={fadeIn}
        activeColor={getComputedStyle(document.documentElement).getPropertyValue('--accentColor')}
        idleColor={getComputedStyle(document.documentElement).getPropertyValue('--black')}
        link='https://songwhip.com/album/the-experience/love-me'
      />
      </div>
    </div>
  );
}

const About = () => {
  const [inViewRef, inView] = useInView({threshold: 0.25, triggerOnce: true});

  const contentTrail = useFadeIn(5, undefined, inView);

  return (
    <div id='about' ref={inViewRef}>
      <animated.div style={contentTrail[0]}>
        <animated.img id='logo' src={Logo} alt='Saving Cindi Logo'/>
        {/* <LogoOutline id='logoOutlineSVG' strokeDashoffset={0}/> */}
      </animated.div>
      <animated.h2 style={contentTrail[1]}>WE ARE SAVING CINDI</animated.h2>
      <animated.p style={contentTrail[2]}>
      Established in April 2018, <Highlight>Saving Cindi</Highlight> is a band based in Ottawa, Canada. They specialize in <Highlight>R&B, Neo-Soul, and Jazz</Highlight>. <Highlight>Vocalist, Jhane Miller</Highlight> (also known as Vauhn) has been singing for over 10 years and has been classically trained in choral music. <Highlight>The bassist, Adam Saint-Fleur</Highlight> not only initiated the band, but has been playing piano for over 10 years. Finally, <Highlight>Étienne Auguste, the drummer</Highlight> has been playing for over 9 years. In October 2018, they released <Highlight>their debut single, Love Me</Highlight>. Since then, they have been working on a project expected to release <Highlight>next summer</Highlight>. Together, they are a group of people that have a <Highlight>burning passion for music</Highlight> and a desire to share it with everyone they meet. 
      </animated.p>
      <animated.div style={contentTrail[3]}>
        <GroupPhoto/>
      </animated.div>
      <animated.div id='names' style={contentTrail[4]}>
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
      </animated.div>
    </div>
  );
}

const Shows = () => {
  return (
    <div id='shows'></div>
  )
}

const Contact = () => {
  return (
    <div id='contact'>
      <img id='logoSmall' src={Logo} alt='Saving Cindi Logo'/>
      <div id='socialLinks'>
        <SocialLink faIcon={faTwitter} link='https://twitter.com/savingcindi'/>
        <SocialLink faIcon={faInstagram} link='https://www.instagram.com/savingcindi/'/>
        <SocialLink faIcon={faSpotify} link='https://open.spotify.com/artist/0kXWGYwMlgnhFVm3BZTJcY?si=cTBxgxJzQfqxFK-ZPz2tFw'/>
        <SocialLink faIcon={faItunesNote} link='https://music.apple.com/ca/artist/the-experience/1438057488'/>
        <SocialLink faIcon={faAmazon} link='https://music.amazon.com/artists/B00OUJBPZQ?ref=dm_sh_c37f-d13b-dmcp-df80-79c19&musicTerritory=US&marketplaceId=ATVPDKIKX0DER'/>
      </div>
      <Button 
        label='info@savingcindi.com'
        className='emailButton'
        activeColor={getComputedStyle(document.documentElement).getPropertyValue('--accentColor')}
        idleColor={getComputedStyle(document.documentElement).getPropertyValue('--white')}
        link='mailto:info@savingcindi.com'
      />
      <div className='tailText'>
        Created with <span role='img' aria-label='love'>💖</span> by
        <a href='https://walcreates.ca'target='_blank' rel='noopener noreferrer external'>
          <Highlight> Wal Wal<Icon icon={faExternalLinkAlt} style={{paddingLeft: '5px'}}/></Highlight>
        </a>
      </div>
      <div className='tailText'>Copyright 2019 © Saving Cindi. All rights reserved.</div>
    </div>
  )
}

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Shows/>
      <Contact/>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))