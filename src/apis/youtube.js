import axios from "axios";
//doesn't need to be secure - restricted to x host
const KEY = "AIzaSyCMEVXuJJOOvimvMTgk-PIwpx8fER2mxso";

export default axios.create({
  // /search will be appended
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
