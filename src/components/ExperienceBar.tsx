
import styles from '../styles/components/ExperienceBar.module.css'
interface BarProps {
    width: string;
}

export function ExperienceBar(props: BarProps) {
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: props.width }}></div>

                <span className={styles.currentExperience} style={{ left: '50%' }}>
                    300 xp
                </span>
            </div>
            <span>600 xp</span>
        </header >
    );
}