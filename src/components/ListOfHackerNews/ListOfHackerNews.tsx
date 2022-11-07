import React, { FC, useState, useEffect } from "react";
import { fetchNews } from "../../api/FetchNews";
import Story from "../Story/Story";
import { StarredNewsContext } from "../../context/hackerNewsContext";
import { StarredNewsContextType } from "../../@types/hackerNews";

import styles from "./HackerNews.module.scss";

interface ListOfHackerNewsProps {}

const ListOfHackerNews: FC<ListOfHackerNewsProps> = () => {
  const { filterIsStarred, starredNews } = React.useContext(
    StarredNewsContext
  ) as StarredNewsContextType;

  const [news, setNews] = useState<any>([]);

  useEffect(() => {
    if (filterIsStarred) {
      setNews(Array.from(starredNews));
    } else {
      const getNews = async () => {
        const news = await fetchNews();
        setNews(news as any);
      };
      getNews();
    }
  }, [filterIsStarred, starredNews]);

  const [visible, setVisible] = useState(12);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 12);
  };

  return (
    <div className={styles.HackerNews}>
      <ol className={styles.ListOfHackerNews}>
        {news &&
          news
            ?.slice(0, visible)
            .map((newsId: number, index: number) => (
              <Story id={newsId}></Story>
            ))}
      </ol>
      <button className={styles.ButtonShowMore} onClick={showMoreItems}>
        show more
      </button>
    </div>
  );
};

export default ListOfHackerNews;
