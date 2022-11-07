import React, { FC, useState } from "react";
import HackerNewsLogo from "../../assets/logo.svg";
import HackerNewsText from "../../assets/HackerNewsText.svg";
import Moon from "../../assets/Moon.svg";
import styles from "./Header.module.scss";
import { StarredNewsContext } from "../../context/hackerNewsContext";
import { StarredNewsContextType } from "../../@types/hackerNews";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const { filterIsStarred, switchFilter } = React.useContext(
    StarredNewsContext
  ) as StarredNewsContextType;

  return (
    <div className={styles.Header}>
      <div className={styles.HeaderLeftMenu}>
        <img src={HackerNewsLogo} alt="React Logo" />
        <img src={HackerNewsText} alt="Hacker News Text" />
        <div className={styles.HeaderFilter}>
          <div
            onClick={() => switchFilter(false)}
            className={!filterIsStarred ? styles.ActiveFilter : ""}
          >
            latest
          </div>
          <div>|</div>
          <div
            onClick={() => switchFilter(true)}
            className={filterIsStarred ? styles.ActiveFilter : ""}
          >
            starred
          </div>
        </div>
      </div>
      <div>
        <img src={Moon} alt="Moon" />
      </div>
    </div>
  );
};

export default Header;
