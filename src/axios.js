import axios from "axios";
const instance = axios.create({
  baseURL: "https://us-central1-clone-d2b78.cloudfunctions.net/api",
  // "http://localhost:5001/clone-d2b78/us-central1/api",
});

export default instance;
