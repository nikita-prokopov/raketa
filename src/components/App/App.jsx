import React, { useState, useEffect } from 'react';
import { getPosts } from '../../api/api';
import { App as StyledApp, Container, ScrolledContainer } from './AppStyles';
import Filter from '../Filter/Filter';
import Posts from './Posts/Posts';

let POSTS = [];

const App = () => {
  const [filterValue, setFilter] = useState('');
  const [showedPosts, setShowedPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then(data => {
        POSTS = data;
        setShowedPosts(POSTS);
      })
      .catch(() => {
        //
      });
  }, []);

  function handleFilter(e) {
    const { value } = e.target;

    const posts = POSTS.filter(({ title }) => {
      return title.includes(value);
    });

    setShowedPosts(posts);
    setFilter(value);
  }

  return (
    <StyledApp>
      <Container>
        <Filter value={filterValue} onChange={handleFilter} />
        <ScrolledContainer>
          <Posts posts={showedPosts} />
        </ScrolledContainer>
      </Container>
    </StyledApp>
  );
};

export default App;
