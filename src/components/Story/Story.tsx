import { FC, useEffect, useState, useContext } from "react";
import { getStoryById } from "../../api/FetchNews";
import styles from "./Story.module.scss";
import { Button, Typography } from "antd";
import { timeSince } from "../../utils/utils";
import { StarredNewsContext } from "../../context/hackerNewsContext";
import {
  StarredNewsContextType,
  ThemeContextType,
} from "../../@types/hackerNews";
import { ThemeContext } from "../../context/themeContext";
import { Link } from "react-router-dom";

const { Text } = Typography;

interface StoryProps {
  id: number;
}

const Story: FC<StoryProps> = ({ id }) => {
  const [story, setStory] = useState<any>();
  const { isDarkMode } = useContext(ThemeContext) as ThemeContextType;

  useEffect(() => {
    const getStory = async () => {
      const story = await getStoryById(id);
      setStory(story as any);
    };
    getStory();
  }, [id]);

  const { starredNews, addStory, deleteStory } = useContext(
    StarredNewsContext
  ) as StarredNewsContextType;

  function updateStarredStatus() {
    starredNews.has(id) ? deleteStory(id) : addStory(id);
  }

  return (
    story && (
      <li className={styles.Story} key={story.id}>
        <a href={story.url} target="_blank" rel="noreferrer">
          <Text
            className={styles.StoryTitle}
            style={{ color: isDarkMode ? "white" : "black" }}
          >
            {story.title}
          </Text>
        </a>
        <Text className={styles.StoryLink} style={{ color: "gray" }}>
          ({story.url?.replace(/https?:\/\//, "").replace(/\/.*/, "")})
        </Text>
        <div className={styles.StoryDetails}>
          <Text style={{ color: "gray" }}>{story.score} points </Text>
          <Link to={`/user/${story.by}`}>
            <Text style={{ color: "gray" }}>by {story.by} </Text>
          </Link>
          <Text style={{ color: "gray" }}>
            {timeSince(story.time)} ago | {story.descendants} comments |
          </Text>
          <Button
            className={styles.StarButton}
            type="link"
            onClick={updateStarredStatus}
            style={{ padding: "3px 3px" }}
          >
            <span
              className={starredNews.has(id) ? styles.StarActive : styles.Star}
            >
              {starredNews.has(id) ? "★" : "☆"}
            </span>
          </Button>
          <Text style={{ color: "gray" }}>
            {starredNews.has(id) ? "saved" : "save"}
          </Text>
        </div>
      </li>
    )
  );
};

export default Story;
