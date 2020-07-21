import React from 'react';
import { List, ListItem, StyledPost as Post } from './PostsStyles';

const Posts = ({ posts }) => {
  const items = posts.map(({ name, userName, title, body }) => {
    return (
      <ListItem key={title}>
        <Post name={name} userName={userName} title={title} body={body} />
      </ListItem>
    );
  });

  return <List>{items}</List>;
};

export default Posts;
