import styles from "../styles/home.module.scss";
import cl from "classnames";

import { Logo } from "../components/Logo/Logo";
import { SocialNetworks } from "../components/SocialNetworks/SocialNetworks";
import { ArtButton } from "../components/ArtButton/ArtButton";
import { Navigation } from "../components/Navigation/Navigation";
import { Title } from "../components/Title/Title";
import { ArtMenu } from "../components/ArtMenu/ArtMenu";

export default function Home() {
  return (
    <div>
      <section className={cl(styles.section, styles.sectionMain)}>
        <header className={styles.header}>
          <Logo />
          <SocialNetworks />
          <ArtButton onClick={() => {}} className="">
            Whitepaper
          </ArtButton>
        </header>
        <Navigation />
        <div>
          <Title>FROM DUSK TO DAWN</Title>
          <ul className={styles.buttonList}>
            <li>
              <ArtButton onClick={() => {}} className="">
                Mint
              </ArtButton>
            </li>
            <li>
              <ArtButton onClick={() => {}} className="">
                Connect Wallet
              </ArtButton>
            </li>
          </ul>
        </div>
      </section>
      <section className={cl(styles.section, styles.sectionEarth)}>
        <Title size="Large">FACTIONS</Title>
        <ArtMenu />
      </section>
      <section className={cl(styles.section, styles.sectionRoadMap)}></section>
      <footer className={styles.footer}>
        <Logo />
        <SocialNetworks />
        <p>Copyright © 2023. All rights reserved.</p>
      </footer>
    </div>
  );
}
