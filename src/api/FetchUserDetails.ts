import axios from "axios";

export const getUserDetailsById = async (id: string) => {
  return axios
    .get(`https://hacker-news.firebaseio.com/v0/user/${id}.json`)
    .then((response) => response.data);
};
