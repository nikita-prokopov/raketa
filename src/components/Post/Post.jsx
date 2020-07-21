import React from 'react';
import { Post as StyledPost, Item, Heading, Text, Paragraph } from './PostStyles';

const Post = React.memo(({ name, userName, title, body, className }) => {
  return (
    <StyledPost className={className}>
      <Item>
        <Heading>Username:</Heading>
        <Text>{userName}</Text>
      </Item>
      <Item>
        <Heading>Name:</Heading>
        <Text>{name}</Text>
      </Item>
      <Item>
        <Heading>Title:</Heading>
        <Text>{title}</Text>
      </Item>
      <Item>
        <Heading>Body:</Heading>
        <Paragraph>{body}</Paragraph>
      </Item>
    </StyledPost>
  );
});

export default Post;
