import Image from "next/image";
import { Parallax } from 'react-parallax';

// Styles
import styles from "../styles/components/quote.module.scss";

interface IQuote {
    index: string;
    text: string;
    source: string;
}

export default function Quote({ index, text, source }) {
    return (
        <Parallax blur={{ min: -5, max: 5 }} strength={300} bgImage={`/images/sections/quote${index}.webp`} bgImageAlt="Children's Hands">
            <section className={styles.quote}>
                <div className={styles.circle}>
                    <i className="icon-quotes-left"></i>
                    <p className={styles.text}>{text}</p>
                    <p className={styles.source}>{source}</p>
                </div>
            </section>
        </Parallax>
    )
}
