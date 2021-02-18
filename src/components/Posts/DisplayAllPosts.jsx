import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';
import EditPost from 'components/Posts/EditPost';

const DisplayAllPosts = () => {
  const currentUserData = useSelector((state) => state.userReducer);
  const { id } = currentUserData;
  const [arrayPost, setArrayPost] = useState([]);
  const history = useHistory();

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

  const fetchDeletePost = (thepost) => {
    fetch(`http://localhost:1337/posts/${thepost}`, {
      method: 'delete',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => {
        console.log(thepost);
        history.push('/');
      })
      .catch((err) => console.log(err));
  };

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
          <br />
          {post.user.id === id
            && (
            <div>
              <EditPost />
              <button type="button" onClick={fetchDeletePost(post.id)}>Delete it</button>
            </div>
            )}
        </li>
      ))}
    </div>
  );
};

export default DisplayAllPosts;
