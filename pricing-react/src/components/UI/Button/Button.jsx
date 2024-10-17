import styles from "./Button.module.scss";

export default function Button({
  color,
  isFeatured,
  children,
  onClick,
  className,
}) {
  return (
    <button
      className={`${styles[color]} ${isFeatured && styles.primary} ${
        styles.button
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
