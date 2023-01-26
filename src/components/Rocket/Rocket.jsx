import rocket from '../../assets/images/rocket.png'
import styles from './Rocket.module.scss'

export default function Rocket() {
  return <img src={rocket} className={styles.Rocket} alt="Logo of a rocket" />
}