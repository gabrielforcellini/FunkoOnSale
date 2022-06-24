import { api } from "../services/api";

export const loadPosts = async () => {
  const postsResponse = await api.get();

  const postsJson = await postsResponse.data.funkos;

  const Posts = postsJson.map((post) => {
    return { ...post };
  });

  return Posts;
};