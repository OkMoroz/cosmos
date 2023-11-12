import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.scss";

interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <Link href="/" className={styles.logo}>
      <Image src="/images/logo.png" alt="DUSKTOPIA" width={204} height={204} />
    </Link>
  );
};
