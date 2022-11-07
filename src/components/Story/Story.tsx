import React, { FC, useEffect, useState } from "react";
import { getStoryById } from "../../api/FetchNews";
import styles from "./Story.module.scss";
import { Button, Typography } from "antd";
import { timeSince } from "../../utils/utils";
import Star from "../../assets/Star.svg";
import StarActive from "../../assets/StarActive.svg";
import { StarredNewsContext } from "../../context/hackerNewsContext";
import { StarredNewsContextType } from "../../@types/hackerNews";

const { Text } = Typography;

interface StoryProps {
  id: number;
}

const Story: FC<StoryProps> = ({ id }) => {
  const [story, setStory] = useState<any>();

  useEffect(() => {
    const getStory = async () => {
      const story = await getStoryById(id);
      setStory(story as any);
    };
    getStory();
  }, [id]);

  const { starredNews, addStory, deleteStory } = React.useContext(
    StarredNewsContext
  ) as StarredNewsContextType;

  function updateStarredStatus() {
    //console.log(starredNews);
    //console.log(starredNews.has(id));
    starredNews.has(id) ? deleteStory(id) : addStory(id);
    //console.log(starredNews);
  }

  return (
    story && (
      <li className={styles.Story} key={story.id}>
        <Text className={styles.StoryTitle}>{story.title}</Text>
        <a href={story.url} target="_blank" rel="noreferrer">
          <Text className={styles.StoryLink} type="secondary">
            ({story.url?.replace(/https?:\/\//, "").replace(/\/.*/, "")})
          </Text>
        </a>
        <div className={styles.StoryDetails}>
          <Text type="secondary">
            {story.score} points by {story.by} {timeSince(story.time)} ago |{" "}
            {story.descendants} comments |
          </Text>
          <Button
            className={styles.StarButton}
            type="link"
            onClick={updateStarredStatus}
          >
            <img src={starredNews.has(id) ? StarActive : Star} alt="Star" />
          </Button>
          {starredNews.has(id) ? "saved" : "save"}
        </div>
      </li>
    )
  );
};

export default Story;
