import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import dayjs from 'dayjs';

const DisplayAllPosts = () => {
  const [arrayPost, setArrayPost] = useState([]);

  const fetchCreatePost = () => {
    fetch('http://localhost:1337/posts', {
      method: 'get',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((postdata) => {
        console.log(postdata);
        setArrayPost(postdata);
        console.log(arrayPost);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCreatePost();
  }, []);

  return (
    <div className="CreatePost">
      <h3>
        Tous nos
        {' '}
        {arrayPost.length}
        {' '}
        posts :
      </h3>

      {arrayPost.map((post) => (
        <li key={post.id} style={{ listStyleType: 'none' }}>
          {post.user.username}
          <br />
          {dayjs(post.created_at).format('DD MMMM YYYY')}
          <br />
          {post.text}
        </li>
      ))}
    </div>
  );
};

export default DisplayAllPosts;
