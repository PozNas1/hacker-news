import { useEffect, useState, createContext } from "react";
import { StarredNewsContextType } from "../@types/hackerNews";

export const StarredNewsContext = createContext<StarredNewsContextType | null>(
  null
);

const StarredNewsProvider: React.FC<{ children: any }> = ({ children }) => {
  const [starredNews, setStarredNews] = useState<Set<number>>(
    new Set(
      localStorage
        .getItem("starredNews")
        ?.split(",")
        .map((id: string) => parseInt(id))
    )
  );
  const [filterIsStarred, setFilterIsStareed] = useState<boolean>(false);

  const switchFilter = (isStarred: boolean) => {
    setFilterIsStareed(isStarred);
  };

  const addStory = (id: number) => {
    setStarredNews((starredNews) => {
      starredNews.add(id);
      return new Set(starredNews);
    });
  };

  const deleteStory = (id: number) => {
    setStarredNews((starredNews) => {
      starredNews.delete(id);
      return new Set(starredNews);
    });
  };

  useEffect(() => {
    if (starredNews.size) {
      localStorage.setItem("starredNews", Array.from(starredNews).join(","));
    }
  }, [starredNews]);

  return (
    <StarredNewsContext.Provider
      value={{
        filterIsStarred,
        starredNews,
        addStory,
        deleteStory,
        switchFilter,
      }}
    >
      {children}
    </StarredNewsContext.Provider>
  );
};

export default StarredNewsProvider;
