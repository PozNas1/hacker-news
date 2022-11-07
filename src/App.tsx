import React from "react";
import "./App.css";
import { Layout } from "antd";
import { Header, ListOfHackerNews, Footer } from "./components";
import StarredNewsProvider from "./context/hackerNewsContext";

function App() {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        borderTop: "4px solid #FE7139",
        backgroundColor: "white",
      }}
    >
      <StarredNewsProvider>
        <Header></Header>
        <ListOfHackerNews></ListOfHackerNews>
        <Footer></Footer>
      </StarredNewsProvider>
    </Layout>
  );
}

export default App;
