import styles from "../styles/components/section.module.scss";

interface ISection {
    children: React.ReactNode;
    heading: string;
    subheading: string
}

export default function Section(props: ISection) {
    return (
        <section className={styles.section}>
            <div className={styles.heading}>
                <h1>{props.heading}</h1>
                <h2>{props.subheading}</h2>
            </div>
            <div className="container">
                <div className={styles.content}>
                    {props.children}
                </div>
            </div>
        </section>
    )
}
