import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const { startNewChallenge } = useContext(ChallengesContext);

    const cycleTime = 0.05 * 60
    const [time, setTime] = useState(cycleTime);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true);

    }
    function resetCountdown() {
        setIsActive(false);
        setHasFinished(false);
        clearTimeout(countdownTimeout);
        setTime(cycleTime);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }
        else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{Math.floor(minutes / 10)}</span>
                    <span>{minutes % 10}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{Math.floor(seconds / 10)}</span>
                    <span>{seconds % 10}</span>
                </div>
            </div>
            { hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButton}>
                    Ciclo encerrado
                </button>
            ) : (
                    <>
                        {isActive ? (
                            <button
                                type="button"
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountdown}>
                                Abandonar ciclo
                            </button>
                        ) : (
                                <button
                                    type="button"
                                    className={styles.countdownButton}
                                    onClick={startCountdown}>
                                    Iniciar um ciclo
                                </button>
                            )}
                    </>
                )}





        </div>
    );
}