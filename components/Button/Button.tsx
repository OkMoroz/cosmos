import { ReactNode } from "react";
import cl from "classnames";

import styles from "./style.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  className: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <button className={cl(styles.artButton, className)} onClick={onClick}>
      <span className={styles.artButtonText}>{children}</span>
      <span className={styles.artButtonAngleLeft} />
      <span className={styles.artButtonAngleRight} />
    </button>
  );
};
