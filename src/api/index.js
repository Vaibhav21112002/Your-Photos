import axios from 'axios';
const url = "http://localhost:8080/api";

export const fetchPosts = () => axios.get(url + "/posts");
export const createPosts = (newPost) => axios.post(url + "/posts", newPost);
