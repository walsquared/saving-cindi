import React, {useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css'
import {useMobile} from 'hooks'

const Button = ({label, section}) => (
  <div
    className={styles.buttonLabel}
    onClick={() => document.getElementById(section).scrollIntoView()}
  >
    {label}
  </div>
)

const Navbar = () => {
  const isMobile = useMobile();

  if (isMobile) {
    return (
      <div id={styles.container}>
        <FontAwesomeIcon id={styles.menuButton} icon={faBars} size='lg'/>
        <div id={styles.title}>
          SAVING CINDI
        </div>
      </div>
    );
  } else {
    return (
      <div id={styles.container}>
        <Button label='HOME' section='home'/>
        <Button label='ABOUT' section='about'/>
        <div id={styles.title}>
          SAVING CINDI
        </div>
        <Button label='SHOWS' section='shows'/>
        <Button label='CONTACT' section='contact'/>
      </div>
    );
  }
};

export default Navbar;