import ClassNames from "classnames";

// Styles
import styles from "../styles/components/section.module.scss";

interface ISection {
    children: React.ReactNode;
    heading: string;
    subheading: string;
    intro?: React.ReactNode;
    noPadding?: boolean;
}

export default function Section(props: ISection) {

    const sectionClasses = ClassNames(
        styles.section,
        props.noPadding ? styles.noPadding : null
    )

    const Heading = () => {
        return (
            <header className={styles.heading}>
                <div>
                    <h1>{props.subheading}</h1>
                    <h2>{props.heading}</h2>
                </div>
                {props.intro}
            </header>
        )
    }
    return (
        <section className={sectionClasses}>
            <Heading />
            <div>
                {props.children}
            </div>
        </section>
    )
}
