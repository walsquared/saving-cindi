import React, {useRef, useState} from 'react';
import {animated, useSpring} from 'react-spring';

import styles from './button.module.css';

const Button = ({label, link, style, color}) => {
  const buttonRef = useRef();
  const [hovering, toggleHover] = useState(false);

  const perimeter = buttonRef.current ? 
    (buttonRef.current.offsetWidth * 2 + 
      buttonRef.current.offsetHeight * 2) : 0

  const blackColor = getComputedStyle(document.documentElement).getPropertyValue('--black')

  const drawStroke = useSpring({
    stroke: hovering ? color : blackColor,
    strokeDashoffset: hovering ? 0 : perimeter,
    strokeDasharray: perimeter,
    width: buttonRef.current ? buttonRef.current.offsetWidth : 0,
    height: buttonRef.current ? buttonRef.current.offsetHeight : 0,
  });

  return (
    <animated.div className={styles.container} style={style}>
      <a
        ref={buttonRef}
        className={styles.label}
        onMouseEnter={() => toggleHover(true)}
        onMouseLeave={() => toggleHover(false)}
        href={link}
        target='_blank'
        rel='noopener noreferrer external'
      >
        {label.toUpperCase()}
      </a>
      <animated.svg className={styles.stroke} style={drawStroke}>
        <rect width="100%" height="100%"/>
      </animated.svg> 
    </animated.div>
  );
}

export default Button;