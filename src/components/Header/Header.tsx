import { FC, useContext } from "react";
import HackerNewsLogo from "../../assets/logo.svg";
import HackerNewsText from "../../assets/HackerNewsText.svg";
import HackerNewsWhite from "../../assets/HackerNewsWhite.svg";
import Moon from "../../assets/Moon.svg";
import Sun from "../../assets/Sun.svg";
import styles from "./Header.module.scss";
import { ThemeContext } from "../../context/themeContext";
import { ThemeContextType } from "../../@types/hackerNews";
import Filter from "../Filter/Filter";
import { Link } from "react-router-dom";

interface HeaderProps {
  withFilter: boolean;
}

const Header: FC<HeaderProps> = ({ withFilter }) => {
  const { isDarkMode, switchMode } = useContext(
    ThemeContext
  ) as ThemeContextType;

  return (
    <div className={styles.Header}>
      <div className={styles.HeaderLeftMenu}>
        <img src={HackerNewsLogo} alt="React Logo" />
        <Link to="/">
          <img
            className={styles.HeaderTitle}
            src={isDarkMode ? HackerNewsWhite : HackerNewsText}
            alt="Hacker News Text"
          />
        </Link>
        {withFilter && <Filter></Filter>}
      </div>
      <button onClick={switchMode} className={styles.ButtonSwitchMode}>
        <img src={isDarkMode ? Sun : Moon} alt="change mode" />
      </button>
    </div>
  );
};

export default Header;
