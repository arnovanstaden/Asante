import { Fade } from "react-reveal"

// Styles
import styles from "../styles/components/section.module.scss";

interface ISection {
    children: React.ReactNode;
    heading: string;
    subheading: string;
    intro?: React.ReactNode;
}

export default function Section(props: ISection) {

    const Heading = () => {
        return (
            <header className={styles.heading}>
                <div>
                    <Fade top>
                        <h1>{props.subheading}</h1>
                    </Fade>
                    <h2>{props.heading}</h2>
                </div>
                {props.intro}
            </header>
        )
    }
    return (
        <section className={styles.section}>
            <div className="container">
                <Heading />
                <div className={styles.content}>
                    {props.children}
                </div>
            </div>
        </section>
    )
}
