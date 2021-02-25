// Components
import Section from "./Section";

// Styles
import styles from "../styles/components/contact.module.scss"

export default function Contact() {
    return (
        <Section
            heading="Get in Touch"
            subheading="Contact Us"
            intro={<p>If you wish to make a <span>positive impact</span>, <span>improve the lives</span> of people, and <span>empower communities </span> to move out of poverty and into prosperity, contact us for a customised  strategic SED and CSI plan you can be proud of.</p>}
        >

        </Section>
    )
}
