export type StarredNewsContextType = {
  filterIsStarred: boolean;
  starredNews: Set<number>;
  addStory: (id: number) => void;
  deleteStory: (id: number) => void;
  switchFilter: (isStarred: boolean) => void;
};

export type ThemeContextType = {
  isDarkMode: boolean;
  switchMode: () => void;
};
