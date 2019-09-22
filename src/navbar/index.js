import React from 'react'
import styles from './index.module.css'

const Button = ({label, link}) => (
  <div className={styles.button}>
    {label}
  </div>
)

const Navbar = () => (
  <div id={styles.container}>
    <Button label='HOME' link=''/>
    <Button label='ABOUT' link=''/>
    <div id={styles.title}>
      SAVING CINDI
    </div>
    <Button label='SHOWS' link=''/>
    <Button label='CONTACT' link=''/>
  </div>
)

export default Navbar