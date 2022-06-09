import { useState, useEffect } from 'react'
import styles from '../styles/Timer.module.css'

const Timer = ({ sec, maxSec }: any) => {

  const styleGenerator = {
    width: `${80 * sec/maxSec}vw`
  }

  return (
    <div className={styles.timer} >
      <div className={styles.timer_inner} style={styleGenerator}></div>
    </div>
  )
}

export default Timer