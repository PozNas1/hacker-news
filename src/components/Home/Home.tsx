import { FC, useContext } from "react";
import { Layout } from "antd";
import { Header, ListOfHackerNews, Footer } from "..";
import StarredNewsProvider from "../../context/hackerNewsContext";
import { ThemeContext } from "../../context/themeContext";
import { ThemeContextType } from "../../@types/hackerNews";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const { isDarkMode } = useContext(ThemeContext) as ThemeContextType;

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
          <Header withFilter={true}></Header>
          <ListOfHackerNews></ListOfHackerNews>
        </div>

        <Footer withFilters={true}></Footer>
      </StarredNewsProvider>
    </Layout>
  );
};

export default Home;
