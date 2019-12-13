import React from 'react'
import Button from './button'
import styles from './show.module.css'

const Show = ({ date, title, time, location, address, mapLink }) => (
  <div className={styles.container}>
    <p className={styles.date}>{date}</p>
    <div className={styles.content}>
      <div className={styles.leftText}>
        <h4>{title}</h4>
        <p>{time}</p>
      </div>
      <div className={styles.rightText}>
        <p>{location}</p>
        <p>{address}</p>
      </div>
    </div>
    <Button
      label='Map'
      style={{
        minWidth: 0
      }}
      className={styles.button}
      activeColor={getComputedStyle(document.documentElement).getPropertyValue('--accentColor')}
      idleColor={getComputedStyle(document.documentElement).getPropertyValue('--white')}
      link={mapLink}
    />
  </div>
)

export default Show
