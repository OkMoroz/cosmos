import styles from "./style.module.scss";
import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
