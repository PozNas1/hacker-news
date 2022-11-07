import * as React from "react";
import { StarredNewsContextType } from "../@types/hackerNews";

export const StarredNewsContext =
  React.createContext<StarredNewsContextType | null>(null);

const StarredNewsProvider: React.FC<{ children: any }> = ({ children }) => {
  const [starredNews, setStarredNews] = React.useState<Set<number>>(
    new Set<number>()
  );
  const [filterIsStarred, setFilterIsStareed] = React.useState<boolean>(false);

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
