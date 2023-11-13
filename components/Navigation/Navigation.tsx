import Link from "next/link";
import styles from "./style.module.scss";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <ul>
      <li>Home</li>
      <li>Factions</li>
      <li>Roadmap</li>
    </ul>
  );
};
