import hero from '../../assets/images/hero.png'
import styles from './Hero.module.scss'

export default function Hero() {
  return <img src={hero} className={styles.Hero} alt="An astronaut and a rocket" />
}