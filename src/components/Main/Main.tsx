import React, { FC } from "react";
import styles from "./Main.module.scss";
import { Layout } from "antd";
import { Header, ListOfHackerNews, Footer } from "../../components";
import StarredNewsProvider from "../../context/hackerNewsContext";
import { ThemeContext } from "../../context/themeContext";
import { ThemeContextType } from "../../@types/hackerNews";

interface MainProps {}

const Main: FC<MainProps> = () => {
  const { isDarkMode } = React.useContext(ThemeContext) as ThemeContextType;

  return (
    <Layout
      style={{
        minHeight: "100vh",
        borderTop: "4px solid #FE7139",
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
        justifyContent: "space-between",
      }}
    >
      <StarredNewsProvider>
        <div>
          <Header withFilters={true}></Header>
          <ListOfHackerNews></ListOfHackerNews>
        </div>

        <Footer withFilters={false}></Footer>
      </StarredNewsProvider>
    </Layout>
  );
};

export default Main;
