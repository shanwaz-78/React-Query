import axios from "axios";

const baseURL = `https://jsonplaceholder.typicode.com`;
const api = axios.create({ baseURL });

export const getPosts = (resource) => api.get(resource);
