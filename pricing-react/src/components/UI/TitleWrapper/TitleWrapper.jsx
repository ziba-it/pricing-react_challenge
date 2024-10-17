import styles from "./TitleWrapper.module.scss";

export default function TitleWrapper({ children }) {
  return <h2 className={styles.title}>{children}</h2>;
}
