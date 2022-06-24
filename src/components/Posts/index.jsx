import * as Styled from './styles';
import { PostCard } from '../PostCard';

export const Posts = ({ posts = [] }) => {
  return (
    <Styled.Container>
      {posts.map((post) => (
        <PostCard
          key={post._id}
          title={post.title}
          body={
            post.description + ' - ' + (post.sale === true ? 'Disponível' : 'Esgotado') + ' - ' + post.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
          }
          cover={post.imageUrl}
        />
      ))}
    </Styled.Container>
  );
};
