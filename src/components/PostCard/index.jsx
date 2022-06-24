import * as Styled from './styles';

export const PostCard = ({ cover, title, body }) => {
  return (
    <Styled.Container>
      <img src={cover} alt={title} />
      <Styled.PostContent>
        <h3>
          {title}
        </h3>
        <p>{body}</p>
      </Styled.PostContent>
    </Styled.Container>
  );
};