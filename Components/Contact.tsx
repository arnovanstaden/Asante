import Image from "next/image";
import { Roll, Slide } from "react-reveal";
import axios from "axios"

// Components
import Section from "./Section";

// Styles
import styles from "../styles/components/contact.module.scss"

export default function Contact() {

    const submitContactForm = (e) => {
        e.preventDefault();
        let data = {}
        const form = document.getElementById("contact-form") as HTMLFormElement;
        const formData = new FormData(form);
        formData.forEach((value, key) => data[key] = value);

        axios({
            method: "POST",
            url: "https://getform.io/f/4fbcb412-43a3-4d8c-af68-61450c235831",
            data: data
        })
            .then(result => {
                if (result.status === 200) {
                    form.reset();
                    return alert("Thank you for your message. We'll get back to you soon!")
                } else {
                    return alert("There seems to be a problem sending your message. Please send us your enquiry via email.")
                }
            })
            .catch(error => console.log(error))
    }


    return (
        <Section
            heading="Get in Touch"
            subheading="Contact Us"
            intro={<p>If you wish to make a <span>positive impact</span>, <span>improve the lives</span> of people, and <span>empower communities </span> to move out of poverty and into prosperity, contact us for a customised  strategic SED and CSI plan you can be proud of.</p>}
        >
            <div className={styles.grid}>
                <Roll left>
                    <div className={styles.image}>
                        <Image priority src="/images/sections/contact.png" alt="Asante2gether logo" width={600} height={600} />
                    </div>
                </Roll>
                <Slide right>
                    <div className={styles.contact}>
                        <ul className={styles.details}>
                            <li>
                                <p>
                                    <span>Phone:</span>
                                    <a href="tel:+27823792110">+27 82 379 2110</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span>Email:</span>
                                    <a href="mailto:info@asante2gether.co.za">  info@asante2gether.co.za</a>
                                </p>
                            </li>
                        </ul>
                        <form name="contact-form" id="contact-form" className={styles.form}>
                            <div className={styles.group}>
                                <label htmlFor="Name">Your Name</label>
                                <input type="text" name="Name" placeholder="Your Name" required />
                            </div>
                            <div className={styles.group}>
                                <label htmlFor="Email">Your Email</label>
                                <input type="email" name="Email" placeholder="Your Email" required />
                            </div>
                            <div className={styles.group}>
                                <label htmlFor="Message">Your Message</label>
                                <textarea name="Message" placeholder="Your Message" required></textarea>
                            </div>
                        </form>
                        <button type="submit" className={styles.button} onClick={(e) => submitContactForm(e)}>
                            <span>Send Message</span>
                        </button>
                    </div>
                </Slide>
            </div>
        </Section>
    )
}
