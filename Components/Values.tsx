import Image from "next/image";
import { Slide, Roll } from "react-reveal"

// Components
import Section from "./Section";

// Styles
import styles from "../styles/components/values.module.scss";

export default function Proposition() {
    return (
        <Section
            heading="Our Values"
            subheading="What we Do"
            intro={<p>We <span>prioritise</span> results that <span>impact</span> communities directly.</p>}
        >
            <div className={styles.grid}>
                <Slide left cascade>
                    <div className={styles.text}>
                        <div className={`${styles.item} ${styles.first}`}>
                            <h5>
                                <i className="bubble"></i>
                            Our Purpose
                        </h5>
                            <p>To give everyone an opportunity to live a life of purpose through meaningful work.</p>
                        </div>
                        <div className={styles.item}>
                            <h5>
                                <i className="bubble"></i>
                            Our Strategic Vision
                        </h5>
                            <p>To continuously create sustainable new jobs.</p>
                        </div>
                        <div className={styles.item}>

                            <h5>
                                <i className="bubble"></i>
                            Our Mission
                        </h5>
                            <p>To drive local economic revitalisation.</p>
                        </div>
                    </div>
                </Slide>
                <Roll right>
                    <div className={styles.image}>
                        <Image src="/images/sections/values.png" alt="Asante2gether logo" width={700} height={700} />
                    </div>
                </Roll>
            </div>
        </Section >
    )
}
