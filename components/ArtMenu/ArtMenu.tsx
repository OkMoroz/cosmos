import { useState } from "react";

import styles from "./style.module.scss";

import { ArtMenuItem } from "./ArtMenuItem";

interface ArtMenuProps {}

const links = [
  {
    id: 1,
    href: "/",
    title: "Blighted Badlands",
    image: "/../public/images/blightedBadlands.jpg",
    active: false,
  },
  {
    id: 2,
    href: "/",
    title: "Glacial Frontier",
    image: "/../public/images/glacialFrontier.jpg",
    active: false,
  },
  {
    id: 3,
    href: "/",
    title: "Sundered Grove",
    image: "/../public/images/sunderedGrove.jpg",
    active: false,
  },
  {
    id: 4,
    href: "/",
    title: "Sky Citadel",
    image: "/../public/images/skyCitadel.jpg",
    active: false,
  },
];

export const ArtMenu: React.FC<ArtMenuProps> = () => {
  const [openedId, setOpenedId] = useState(0);

  return (
    <div className={styles.artMenu}>
      {links.map((link) => (
        <ArtMenuItem
          key={link.id}
          onClick={(event) => {
            event.preventDefault();
            setOpenedId(link.id !== openedId ? link.id : 0);
          }}
          isOpened={link.id === openedId}
          {...link}
        />
      ))}
    </div>
  );
};
