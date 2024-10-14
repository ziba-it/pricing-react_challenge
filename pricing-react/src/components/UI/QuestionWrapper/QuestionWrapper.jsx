import styles from "./QuestionWrapper.module.scss";

export default function QuestionWrapper({ children }) {
  return <p className={styles.question}>{children}</p>;
}
