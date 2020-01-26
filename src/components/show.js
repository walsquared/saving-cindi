import React from "react"
import { animated } from "react-spring"
import Button from "./button"
import styles from "./show.module.css"

const Show = ({ date, title, time, location, address, link, style, soldOut }) => (
  <animated.div className={styles.container} style={style}>
    <p className={styles.date}>{date}</p>
    <div className={styles.content}>
      <div className={styles.leftText}>
        <p className={styles.title}>{title}</p>
        <p>{time}</p>
      </div>
      <div className={styles.rightText}>
        <p>{location}</p>
        <p>{address}</p>
      </div>
    </div>
    <Button
      disabled={soldOut}
      label={soldOut ? "Sold Out" : "Tickets"}
      style={{
        minWidth: 0
      }}
      className={styles.button}
      activeColor={getComputedStyle(document.documentElement).getPropertyValue("--accentColor")}
      idleColor={getComputedStyle(document.documentElement).getPropertyValue("--white")}
      link={link}
    />
  </animated.div>
)

export default Show
