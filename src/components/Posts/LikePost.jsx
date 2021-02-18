/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Cookies from 'js-cookie';

const LikePost = ({ like, id }) => {
  const [nbLikes, setNbLikes] = useState(like);
  const [likeStatus, setLikeStatus] = useState(false);

  const fetchEditPost = () => {
    const data = {
      like: nbLikes,
    };

    if (likeStatus === false) {
      data.like = nbLikes + 1;
      setNbLikes(nbLikes + 1);
    } else {
      data.like = nbLikes - 1;
      setNbLikes(nbLikes - 1);
    }

    fetch(`http://localhost:1337/posts/${id}`, {
      method: 'put',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => setLikeStatus(!likeStatus))
      .catch((err) => console.log(err));
  };

  return (
    <div className="LikePost">
      {/* <button type="button" onClick={fetchEditPost}>♡</button> */}
      <small>
        likes:
        {nbLikes}
      </small>
      <br />
      {!likeStatus
        && (
        <button type="button" className="like-btn" onClick={() => fetchEditPost()}>
          <i className="far fa-heart" aria-hidden="true" />
        </button>
        )}
      {likeStatus
        && (
        <button type="button" className="like-btn" onClick={() => fetchEditPost()}>
          <i className="fas fa-heart" aria-hidden="true" />
        </button>
        )}
    </div>
  );
};

export default LikePost;
