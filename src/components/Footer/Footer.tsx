import { FC } from "react";
import Filter from "../Filter/Filter";
import styles from "./Footer.module.scss";

interface FooterProps {
  withFilters: boolean;
}

const Footer: FC<FooterProps> = ({ withFilters }) => {
  return (
    <div className={styles.Footer}>
      <p className={styles.FooterTitle}>Hacker News</p>
      {withFilters && <Filter></Filter>}
    </div>
  );
};

export default Footer;
