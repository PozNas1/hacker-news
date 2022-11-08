import React, { FC, useState } from "react";
import HackerNewsLogo from "../../assets/logo.svg";
import HackerNewsText from "../../assets/HackerNewsText.svg";
import HackerNewsWhite from "../../assets/HackerNewsWhite.svg";
import Moon from "../../assets/Moon.svg";
import Sun from "../../assets/Sun.svg";
import styles from "./Header.module.scss";
import { ThemeContext } from "../../context/themeContext";
import { ThemeContextType } from "../../@types/hackerNews";
import Filter from "../Filter/Filter";

interface HeaderProps {
  withFilters: boolean;
}

const Header: FC<HeaderProps> = ({ withFilters }) => {
  const { isDarkMode, switchMode } = React.useContext(
    ThemeContext
  ) as ThemeContextType;

  return (
    <div className={styles.Header}>
      <div className={styles.HeaderLeftMenu}>
        <img src={HackerNewsLogo} alt="React Logo" />
        <img
          className={styles.HeaderTitle}
          src={isDarkMode ? HackerNewsWhite : HackerNewsText}
          alt="Hacker News Text"
        />
        {withFilters && <Filter></Filter>}
      </div>
      <div onClick={switchMode}>
        <img src={isDarkMode ? Sun : Moon} alt="change mode" />
      </div>
    </div>
  );
};

export default Header;
