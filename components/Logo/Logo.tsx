import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.scss";
import logo from "../../public/images/logo.png";

interface LogoProps {
  title?: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <Link href="/" className={styles.logo}>
      <Image src={logo} alt="DUSKTOPIA" width={204} height={204} />
    </Link>
  );
};
