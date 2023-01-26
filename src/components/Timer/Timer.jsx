import useTimer from '../../hooks/useTimer'
import styles from './Timer.module.scss'

export default function Timer({ timerId, secondsToWait = 300, minuetsToWait = 0 }) {
  const timerToWait = secondsToWait + (minuetsToWait * 60)

  const { time, resetTimer } = useTimer(timerId, timerToWait)

  return (
    <div className={styles.Timer}>
      <div className={styles.TimerValue}>
        <span>{time.minutes}</span>
        :
        <span>{time.seconds.toString().padStart(2, '0')}</span>
      </div>
      <button onClick={resetTimer} type='button' className={styles.ResetButton}>Reset Timer</button>
    </div>
  )
}