import styles from "../styles/home.module.scss";
import cl from "classnames";

import { Logo } from "../components/Logo/Logo";
import { SocialNetworks } from "../components/SocialNetworks/SocialNetworks";
import { Button } from "../components/Button/Button";
// import { Navigation } from "../components/Navigation/Navigation";
import { Title } from "../components/Title/Title";

export default function Home() {
  return (
    <div>
      <section className={cl(styles.section, styles.sectionMain)}>
        <header className={styles.header}>
          <Logo />
          <SocialNetworks />
          <Button onClick={() => {}}>Whitepaper</Button>
        </header>
        {/* <Navigation /> */}
        <div>
          <Title>FROM DUSK TO DAWN</Title>
          <ul className={styles.buttonList}>
            <li>
              <Button onClick={() => {}}>Mint</Button>
            </li>
            <li>
              <Button onClick={() => {}}>Connect Wallet</Button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
