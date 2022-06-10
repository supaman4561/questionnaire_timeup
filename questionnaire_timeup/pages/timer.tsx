import { useState, useEffect } from 'react'
import styles from '../styles/Timer.module.css'

const Timer = ({ sec, maxSec }: any) => {

  const styleGenerator = {
    width: `${95 * sec/maxSec}%`
  }

  return (
    <div className={styles.timer} >
      <div className={styles.timer_num}>{sec}</div>
      <div className={styles.timer_inner} style={styleGenerator}></div>
    </div>
  )
}

export default Timer