import axios from "axios";
const baseUrl = process.env.REACT_APP_POST_URL;

export const helper = async (endpoint, data, method = "GET") => {
  const url = `${baseUrl}${endpoint}`;
  if (method === "GET") {
    const res = await axios.get(url);
    return res;
  } else {
    const res = await axios.post("http://localhost:4000/posts", data);
    return res;
  }
};
