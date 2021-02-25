import Image from "next/image"


// Components
import Section from "./Section";

// Styles
import styles from "../styles/components/offering.module.scss"

export default function Offering() {
    return (
        <Section
            heading="A Holistic &amp; Ecosystemic Approach"
            subheading="Our Offering"
        >
            <div className={styles.image}>
                <Image src="/images/sections/offering.png" width={1500} height={1500} alt="Business people shaking hands" quality={95} />
            </div>
        </Section>
    )
}
