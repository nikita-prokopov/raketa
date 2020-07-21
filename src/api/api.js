const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

async function fetchPosts() {
  try {
    const response = await fetch(POSTS_URL);
    const posts = await response.json();
    return posts;
  } catch {
    throw new Error();
  }
}

async function fetchUsers() {
  try {
    const response = await fetch(USERS_URL);
    const users = await response.json();
    return users;
  } catch {
    throw new Error();
  }
}

export async function getPosts() {
  const posts = await fetchPosts();
  const users = await fetchUsers();

  const postsArray = posts.map(({ title, body, userId }) => {
    const positionInUsersArray = userId - 1;
    const { name, username } = users[positionInUsersArray];

    return {
      title,
      body,
      name,
      userName: username,
    };
  });

  return postsArray;
}
