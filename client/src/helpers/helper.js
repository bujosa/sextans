import axios from "axios";
const baseUrl = process.env.REACT_APP_POST_URL;

export const helper = async (endpoint, data, method = "GET") => {
  const url = await `${baseUrl}${endpoint}`;
  if (method === "GET") {
    const res = await axios.get(url);
    return res;
  } else {
    return await axios.post(url, data);
  }
};
