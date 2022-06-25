import { api } from "../services/api";

export const loadPosts = async () => {
  const postsResponse = await api.get('/funko');

  const postsJson = await postsResponse.data.funkos;

  const posts = postsJson.filter((post) => {
    return post.sale;
  });

  const Posts = posts.map((post) => {
    return { ...post };
  });

  return Posts;
};