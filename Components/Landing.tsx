import Image from "next/image";
import { Parallax } from 'react-parallax';


import styles from "../styles/components/landing.module.scss"

export default function Landing() {
    return (
        <Parallax strength={250} bgImage={`/images/sections/landing.webp`} bgImageAlt="Children's Hands">

            <section className={styles.landing}>
                <div className={styles.circle}>
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
            </section>
        </Parallax >
    )
}
