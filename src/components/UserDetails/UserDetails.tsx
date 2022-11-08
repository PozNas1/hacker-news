import { FC, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./UserDetails.module.scss";
import StarredNewsProvider from "../../context/hackerNewsContext";
import { ThemeContext } from "../../context/themeContext";
import { ThemeContextType } from "../../@types/hackerNews";
import { Descriptions, Layout, Typography } from "antd";
import { Header, Footer } from "../../components";
import { getUserDetailsById } from "../../api/FetchUserDetails";

const { Text } = Typography;

const UserDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isDarkMode } = useContext(ThemeContext) as ThemeContextType;
  const [userDetails, setUserDetails] = useState<any>([]);

  useEffect(() => {
    const getUserDetails = async () => {
      const userDetails = await getUserDetailsById(id as string);
      setUserDetails(userDetails as any);
    };
    getUserDetails();
  }, [id]);

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
          <Header withFilter={false}></Header>
        </div>

        <Descriptions
          className={styles.UserDetails}
          contentStyle={{
            color: isDarkMode ? "white" : "black",
            border: "2px solid #fe7139",
          }}
          labelStyle={{
            color: isDarkMode ? "white" : "black",
            backgroundColor: isDarkMode ? "black" : "white",
            border: "2px solid #fe7139",
          }}
          title={
            <Text style={{ color: isDarkMode ? "white" : "black" }}>
              User Info
            </Text>
          }
          column={1}
          bordered
        >
          <Descriptions.Item label="User name">
            {userDetails.id}
          </Descriptions.Item>
          <Descriptions.Item label="Karma">
            {userDetails.karma}
          </Descriptions.Item>
          <Descriptions.Item label="Self-description">
            {userDetails.about}
          </Descriptions.Item>
        </Descriptions>

        <Footer withFilters={false}></Footer>
      </StarredNewsProvider>
    </Layout>
  );
};

export default UserDetails;
