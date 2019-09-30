import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css'

import {useMobile} from '../hooks';

const Button = ({label, link}) => (
  <div className={styles.button}>
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
        <Button label='HOME' link=''/>
        <Button label='ABOUT' link=''/>
        <div id={styles.title}>
          SAVING CINDI
        </div>
        <Button label='SHOWS' link=''/>
        <Button label='CONTACT' link=''/>
      </div>
    );
  }
};

export default Navbar;