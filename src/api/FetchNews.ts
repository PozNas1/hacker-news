import axios from "axios";

export const fetchNews = async () => {
  return axios
    .get("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then((response) => response.data);
};

export const getStoryById = async (id: number) => {
  return axios
    .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then((response) => response.data);
};
