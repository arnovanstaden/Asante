import Image from "next/image";
import { Roll, Slide } from "react-reveal"

// Components
import Section from "./Section";

// Styles
import styles from "../styles/components/proposition.module.scss";

export default function Proposition() {
    return (
        <Section
            heading="Our Value Proposition"
            subheading="What we Do"
            intro={<p className={styles.intro}>To assist local communities to generate <span>income</span>, to find their <span>purpose</span>, and to enable <span>self-sufficiency</span>.</p>}
        >
            <div className={styles.row}>
                <Roll bottom>
                    <div className={`${styles.circle} ${styles.small}`}>
                        <p>Skills<br />Development</p>
                    </div>
                </Roll>
                <div className={styles.text}>
                    <h3>We do this through</h3>
                </div>
                <Roll bottom>

                    <div className={`${styles.circle} ${styles.small}`}>
                        <p>Job <br />Creation <br />Initiatives</p>
                    </div>
                </Roll>
            </div>
            <div className={styles.row}>
                <Roll bottom>

                    <div className={`${styles.circle} ${styles.big}`}>
                        <p>Economic <br />Transformation</p>
                    </div>
                </Roll>
                <Roll bottom>

                    <div className={`${styles.circle} ${styles.big}`}>
                        <p>Sustainable <br />Entrepreneurship</p>
                    </div>
                </Roll>
            </div>
        </Section>
    )
}
