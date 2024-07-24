import axios from "axios";

const BaseUrl = "http://localhost:3000";
export const Axios = axios.create({ baseURL: BaseUrl });
