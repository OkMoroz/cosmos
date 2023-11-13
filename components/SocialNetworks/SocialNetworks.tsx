import styles from "./style.module.scss";
import cl from "classnames";

interface SocialNetworksProps {}

const socialNetworks = [
  {
    title: "DisCord",
    id: 1,
    className: "DisCord",
    link: "https://google.com/",
  },
  {
    title: "Twitter",
    id: 2,
    className: "Twitter",
    link: "https://google.com/",
  },
  {
    title: "AntDesign",
    id: 3,
    className: "AntDesign",
    link: "https://google.com/",
  },
];
export const SocialNetworks: React.FC<SocialNetworksProps> = ({}) => {
  return (
    <ul className={styles.socialNetworks}>
      {socialNetworks.map((socialNetwork) => (
        <li key={socialNetwork.id} className={styles.socialNetworkItem}>
          <a
            href={socialNetwork.link}
            target="blank"
            rel="noreferrer"
            className={cl(
              styles.socialNetworksLink,
              styles[`socialNetworks${socialNetwork.className}`]
            )}
          >
            {socialNetwork.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
