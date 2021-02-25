import Image from "next/image";

import styles from "../styles/components/landing.module.scss"

export default function Landing() {
    return (
        <section className={styles.landing}>
            <div className={styles.left}>
                <Image priority src="/images/sections/landing-right.png" alt="Asante2gether logo" width={500} height={500} />
            </div>
            <div className={styles.center}>
                <img src="/images/logos/Logo.svg" alt="Asante2gether logo" width={500} height={500} />
                <h1>Asante<span>2</span>gether</h1>
                <h2>From poverty to prosperity…</h2>
                <div className={styles.words}>
                    <p>Income</p>
                    <i className="bubble"></i>
                    <p>Self-sufficiency</p>
                    <i className="bubble"></i>
                    <p>Purpose</p>
                </div>
            </div>
            <div className={styles.right}>
                <Image priority src="/images/sections/landing-right.png" alt="Asante2gether logo" width={500} height={500} />
            </div>
        </section>
    )
}
