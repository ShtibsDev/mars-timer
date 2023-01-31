import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export default function useTimer(timerId, secondsToWait) {
	const timerIdentifier = `timer_${timerId}`;
	const [seconds, setSeconds] = useState(secondsToWait);

	useEffect(() => {
		const storedSeconds = Number(localStorage.getItem(timerIdentifier) ?? secondsToWait);
		setSeconds(storedSeconds);
	}, []);

	useEffect(() => {
		let intervalId;

		if (seconds <= 0) stopTimer();
		else setTimer();

		function stopTimer() {
			Swal.fire('You missed the last rocket to mars!');
			clearInterval(intervalId);
			setSeconds(0);
		}

		function setTimer() {
			intervalId = setInterval(() => {
				setSeconds((sec) => {
					const newSec = sec - 1;
					localStorage.setItem(timerIdentifier, newSec);
					return newSec;
				});
			}, 1000);
		}

		return () => clearInterval(intervalId);
	}, [seconds]);

	const resetTimer = () => setSeconds(secondsToWait);

	const time = { minutes: Math.floor(seconds / 60), seconds: seconds % 60 };
	return { time, resetTimer };
}

