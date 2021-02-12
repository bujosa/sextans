import axios from "axios";
const baseUrl = process.env.REACT_APP_POST_URL;
const baseUrlPost = process.env.REACT_APP_POST_QUERY_URL;
const baseUrlComment = process.env.REACT_APP_COMMENT_URL;

export const helper = async (endpoint, data, method = "GET") => {
  const url = `${baseUrl}${endpoint}`;
  if (method === "GET") {
    const res = await axios.get(`${baseUrlPost}${endpoint}`);
    return res;
  } else {
    return await axios.post(url, data);
  }
};

export const helperComment = async (endpoint, data, method = "GET") => {
  const url = await `${baseUrlComment}${endpoint}`;
  if (method === "GET") {
    const res = await axios.get(url);
    return res;
  } else {
    return await axios.post(url, data);
  }
};
