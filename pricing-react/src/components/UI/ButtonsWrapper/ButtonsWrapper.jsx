import Button from "../../UI/Button/Button";

import styles from "./ButtonsWrapper.module.scss";

export default function ButtonsWrapper({ buttons }) {
  return (
    <div className={styles.container}>
      {buttons.map((button, index) => (
        <Button key={index} color={button.color} onClick={button.onClick}>
          {button.label}
        </Button>
      ))}
    </div>
  );
}
