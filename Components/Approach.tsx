import Image from "next/image"

// Components
import Section from "./Section";

// Styles
import styles from "../styles/components/approach.module.scss"

export default function Approach() {
    return (
        <Section
            heading="A Results-Driven Approach to Entrepreneurship "
            subheading="Entrepreneurship Development"
            intro={<p className={styles.intro}>To assist local communities to generate <span>income</span>, to find their <span>purpose</span>, and to enable <span>self-sufficiency</span>.</p>}
        >
            <div className={styles.approach}>
                <div className={styles.circles}>
                    <p>Asante2gether’s approach follows the E-Myth model,developed by Michael E. Gerber: </p>
                    <div className={styles.row}>
                        <div className={styles.circle}>
                            <div>1</div>
                            <p>Entrepreneur</p>
                        </div>
                        <div className={styles.circle}>
                            <div>2</div>
                            <p>Manager</p>
                        </div>
                        <div className={styles.circle}>
                            <div>3</div>
                            <p>Technician</p>
                        </div>
                    </div>
                </div>
                <div className={styles.grid}>
                    <div className={styles.text}>
                        <p>Entrepreneurship is the key driver for developing a struggling economy, for job creation and for the innovation required to create new markets. Yet with billions of rands spent every year, developing sustainable small businesses continues to be elusive.</p>
                    </div>
                    <div className={styles.image}>
                        <Image src="/images/sections/approach.png" width={600} height={600} alt="Business people shaking hands" />
                    </div>
                    <div className={styles.text}>
                        <p>We will identify business opportunities which will allow us to create technicians (‘doers’), managers and, evolving out of this, entrepreneurs capable of growing and building the business. In this way we are able to effectively utilise CSI and SED funds to impact individuals at all levels in their own communities.</p>
                    </div>
                </div>
            </div>

        </Section>
    )
}
