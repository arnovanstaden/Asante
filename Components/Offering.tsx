import Image from "next/image"
import { useMediaQuery } from 'react-responsive'

// Components
import Section from "./Section";

// Styles
import styles from "../styles/components/offering.module.scss"

export default function Offering() {

    const isMobileDevice = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <Section
            heading="A Holistic &amp; Ecosystemic Approach"
            subheading="Our Offering"
        >
            <div className={styles.grid}>
                <div className={styles.image}>
                    {isMobileDevice
                        ?
                        <Image src="/images/sections/offering-mobile.png" width={768} height={768} alt="Business people shaking hands" quality={95} />
                        :
                        <Image src="/images/sections/offering.png" width={1500} height={1500} alt="Business people shaking hands" quality={95} />
                    }
                </div>
            </div>
        </Section>
    )
}
