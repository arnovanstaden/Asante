import Image from "next/image";

// Components
import Section from "./Section";

// Styles
import styles from "../styles/components/partnership.module.scss";

export default function ValueProposition() {
    return (
        <Section
            heading="Strategic Partnerships"
            subheading="Success Through"
            intro={<p>Asante2gether recognises that the solutions to South Africa’s skills shortage lies in the creation of strategic partnerships in which each partner leverages their <span>strengths and resources</span> to create a <span>holistic ecosystem of support</span>. To this end, Asante2gether is proud to partner with the following companies to ensure seamless <span>selection, delivery and impact</span>.</p>}
        >
            <div className={styles.grid}>
                <div className={styles.text}>
                    <h5>
                        <i className="bubble"></i>
                        AfricaneurIQ
                    </h5>
                    <p>AIQ, whose Enterprise &amp; Supplier Development (ESD) model has been in operation since 2014, has had brilliant success in leveraging the ESD components of the Broad-Based Black Economic Empowerment Act. AIQ’s beneficiaries, all of whom run successful entrepreneurial enterprises, will provide our programme beneficiaries with opportunities, not only for work experience during their learnerships but also for permanent employment of learners upon successful completion of their learnerships. </p>
                </div>
                <a className={styles.image} href="https://www.africaneuriq.co.za/" target="blank">
                    <Image src="/images/sections/aiq-logo.jpg" alt="AIQ-Logo" width={250} height={250} />
                </a>
                <a className={styles.image} href="https://t-t-s.co.za/" target="blank">
                    <Image src="/images/sections/tts-logo.svg" alt="TTS-Logo" width={300} height={300} />
                </a>
                <div className={styles.text}>
                    <h5>
                        <i className="bubble"></i>
                        Together Through Skills
                    </h5>
                    <p>Together Through Skills (TTS) is a recruitment, training and placement company, focusing on youth employment, entrepreneurship development, rural communities and people living with disabilities. TTS aims to upskill and integrate South African youth into the world of work, by leveraging the Skills Development and Corporate Social Investment components of the B-BBEE Act.</p>
                </div>
            </div>

        </Section>
    )
}
