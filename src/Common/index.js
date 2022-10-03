import axios from "axios";

const AxiosClient = axios.create({
  baseURL: "http://localhost:5000/api/",
});

export default AxiosClient;
