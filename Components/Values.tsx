import Image from "next/image";

// Components
import Section from "./Section";

// Styles
import styles from "../styles/components/values.module.scss";

export default function Proposition() {
    return (
        <Section
            heading="Our Values"
            subheading="What we Do"
        >
            <p className={styles.intro}>We <span>prioritise</span> results that <span>impact</span> communities directly.</p>
            <div className={styles.grid}>
                <div className={styles.item}>
                    <i></i>
                    <h5>Our Strategic Vision</h5>
                    <p>To continuously create sustainable new jobs.</p>
                </div>
                <div className={styles.item}>
                    <i></i>
                    <h5>Our Purpose</h5>
                    <p>To give everyone an opportunity to live a life of purpose through meaningful work.</p>
                </div>

                <div className={styles.item}>
                    <i></i>
                    <h5>Our Mission</h5>
                    <p>To drive local economic revitalisation.</p>
                </div>
            </div>
        </Section>
    )
}
