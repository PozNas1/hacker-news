import React, { FC } from "react";
import styles from "./Footer.module.scss";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className={styles.Footer}>
      <p className={styles.FooterTitle}>Hacker News</p>
      <div className={styles.Filter}>
        <div>latest</div>
        <div>|</div>
        <div>starred</div>
      </div>
    </div>
  );
};

export default Footer;
