import styles from "../styles/components/loader.module.scss";

export default function Loader() {
    return (
        <div className={styles.loader}>
            <div className={styles.spinner}>
                <div className={styles.dot1}></div>
                <div className={styles.dot2}></div>
            </div>
        </div>
    )
}
