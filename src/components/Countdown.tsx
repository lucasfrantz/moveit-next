import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/Countdown.module.css'


export function Countdown() {

    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountdown,
        startCountdown } = useContext(CountdownContext);

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