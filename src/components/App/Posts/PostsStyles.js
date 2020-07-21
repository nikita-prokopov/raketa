import styled from 'styled-components';
import Post from '../../Post/Post';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledPost = styled(Post)`
  border-top: none;
  border-left: none;
`;

export const ListItem = styled.li`
  &:last-child ${StyledPost} {
    border-bottom: none;
  }
`;
