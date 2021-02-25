import Image from "next/image";

import styles from "../styles/components/landing.module.scss"

export default function Landing() {
    return (
        <section className={styles.landing}>
            <div className={styles.left}>
                <Image src="/images/sections/landing-right.png" alt="Asante2gether logo" width={500} height={500} />
            </div>
            <div className={styles.center}>
                <img src="/images/logos/Logo.svg" alt="Asante2gether logo" width={500} height={500} />
                <h1>Asante<span>2</span>gether</h1>
                <p>From poverty to prosperity…</p>
                <div className={styles.words}>
                    <p>Income</p>
                    <i></i>
                    <p>Self-sufficiency</p>
                    <i></i>
                    <p>Purpose</p>
                </div>
            </div>
            <div className={styles.right}>
                <Image src="/images/sections/landing-right.png" alt="Asante2gether logo" width={500} height={500} />
            </div>
        </section>
    )
}
