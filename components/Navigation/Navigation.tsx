import Link from "next/link";
import styles from "./style.module.scss";
import cl from "classnames";
import { Fragment } from "react";

interface NavigationProps {}

const links = [
  {
    id: 1,
    title: "Home",
    href: "/",
    active: true,
  },
  {
    id: 2,
    title: "Factions",
    href: "/",
    active: false,
  },
  {
    id: 3,
    title: "Roadmap",
    href: "/",
    active: false,
  },
  {
    id: 4,
    title: "Collaborations",
    href: "/",
    active: true,
  },
  {
    id: 5,
    title: "FAQ",
    href: "/",
    active: false,
  },
  {
    id: 6,
    title: "Team",
    href: "/",
    active: false,
  },
];

export const Navigation: React.FC<NavigationProps> = ({}) => {
  const activeIndex = links.findIndex((link) => link.active);
  const visibleLinks = links.slice(
    Math.max(0, activeIndex - 1),
    activeIndex + 3
  );

  return (
    <nav className={styles.navigation}>
      {visibleLinks.map((link, id) => (
        <Fragment key={link.id}>
          <Link
            href={link.href}
            className={cl(
              styles.navigationLink,
              link.active && styles.navigationLinkActive
            )}
          >
            {link.title}
          </Link>
          {id < visibleLinks.length - 1 && (
            <span className={styles.navigationStar} />
          )}
        </Fragment>
      ))}
    </nav>
  );
};
