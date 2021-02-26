import Image from "next/image";
import { Parallax } from 'react-parallax';
import { Fade } from "react-reveal"


import styles from "../styles/components/landing.module.scss"

export default function Landing() {
    return (
        <Parallax strength={250} bgImage={`/images/sections/landing.webp`} bgImageAlt="Children's Hands">

            <section className={styles.landing}>
                <Fade>
                    <div className={styles.circle}>
                        <img src="/images/logos/Logo.svg" alt="Asante2gether logo" width={500} height={500} />
                        <h1>Asante<span>2</span>gether</h1>
                        <h2>From <span>poverty</span> <span>to</span> <span>prosperity</span>…</h2>
                        <div className={styles.words}>
                            <Fade left cascade duration={3000}>
                                <p>Income</p>
                                <i className="bubble"></i>
                                <p>Self-sufficiency</p>
                                <i className="bubble"></i>
                                <p>Purpose</p>
                            </Fade>
                        </div>
                    </div>
                </Fade>
            </section>
        </Parallax >
    )
}
