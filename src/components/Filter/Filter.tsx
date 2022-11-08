import React, { FC } from "react";
import styles from "./Filter.module.scss";
import { StarredNewsContext } from "../../context/hackerNewsContext";
import { StarredNewsContextType } from "../../@types/hackerNews";

interface FilterProps {}

const Filter: FC<FilterProps> = () => {
  const { filterIsStarred, switchFilter } = React.useContext(
    StarredNewsContext
  ) as StarredNewsContextType;
  return (
    <div className={styles.Filter}>
      <div
        onClick={() => switchFilter(false)}
        className={!filterIsStarred ? styles.ActiveFilter : ""}
      >
        latest
      </div>
      <div>|</div>
      <div
        onClick={() => switchFilter(true)}
        className={filterIsStarred ? styles.ActiveFilter : ""}
      >
        starred
      </div>
    </div>
  );
};

export default Filter;
