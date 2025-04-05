import axios from "axios";

const baseURL = `https://jsonplaceholder.typicode.com`;
const api = axios.create({ baseURL, headers : {"Content-Type" : "application/json"} });

export const getPosts = (resource) => api.get(resource);
