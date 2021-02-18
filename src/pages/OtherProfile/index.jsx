import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { React, useEffect, useState } from 'react';
import dayjs from 'dayjs';

const OtherProfile = () => {
  const { userID } = useParams();
  const [userInfo, setuserInfo] = useState('');
  const [userPost, setUserPost] = useState([]);

  const UserInfo = () => {
    fetch(`http://localhost:1337/users/${userID}`, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setuserInfo(response);
      });
  };

  useEffect(() => UserInfo(), []);

  const UserPost = () => {
    fetch(`http://localhost:1337/posts?user.id=${userID}`, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setUserPost(response);
        console.log(userPost);
      });
  };

  return (
    <div className="OtherProfile">
      <h2>Profil de l`auteur:</h2>
      <p>{userInfo.username}</p>
      <p>{userInfo.email}</p>
      <button type="button" onClick={UserPost}>See user posts</button>
      {userPost.map((post) => (
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

export default OtherProfile;
