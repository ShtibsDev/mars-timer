import Hero from './components/Hero/Hero';
import Rocket from './components/Rocket/Rocket';
import Timer from './components/Timer/timer';
import styles from './App.module.scss';

function App() {
	return (
		<div className="App">
			<header>
				<Rocket />
			</header>
			<main>
				<section className={styles.CallToAction}>
					<div>
						<h1>Get your seat to Mars!</h1>
						<p>Earth is doomed, but don't worry! The last rocket is leaving for mars soon, so hurry up and book you flight!</p>
					</div>
					<Hero />
				</section>

				<section className={styles.Countdown}>
					<header>Countdown to lift off</header>
					<div className={styles.Timers}>
						<Timer timerId={0} secondsToWait={50} />
						<Timer timerId={1} secondsToWait={4} minuetsToWait={1} />
						<Timer timerId={2} />
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;

