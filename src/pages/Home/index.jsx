import React from 'react';
import CreatePost from 'components/Posts/CreatePost';
import DisplayAllPosts from 'components/Posts/DisplayAllPosts';

const Home = () => (
  <div>
    <CreatePost />
    <DisplayAllPosts />
  </div>
);

export default Home;
