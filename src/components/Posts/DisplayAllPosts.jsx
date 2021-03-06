import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';
import LikePost from './LikePost';
import './index.scss';

const DisplayAllPosts = () => {
  const currentUserData = useSelector((state) => state.userReducer);
  const { id } = currentUserData;
  const [arrayPost, setArrayPost] = useState([]);
  const history = useHistory();

  const fetchDisplayPost = () => {
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
    fetchDisplayPost();
  }, []);

  const fetchDeletePost = (thepost) => {
    fetch(`http://localhost:1337/posts/${thepost}`, {
      method: 'delete',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => fetchDisplayPost())
      .catch((err) => console.log(err));
  };

  return (
    <div className="DisplayPost">
      <h3>
        Our
        {' '}
        {arrayPost.length}
        {' '}
        posts :
      </h3>

      {arrayPost.map((post) => (
        <li className="card" key={post.id} style={{ listStyleType: 'none' }}>
          <LikePost like={post.like} id={post.id} />
          {post.user.username}
          <br />
          {dayjs(post.created_at).format('DD MMMM YYYY')}
          <br />
          {post.text}
          <br />
          {post.user.id === id
            && (
            <div>
              <button type="button" onClick={() => fetchDeletePost(post.id)}>❌</button>
            </div>
            )}
        </li>
      ))}
    </div>
  );
};

export default DisplayAllPosts;
