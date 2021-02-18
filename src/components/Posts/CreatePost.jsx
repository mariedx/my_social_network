import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import Cookies from 'js-cookie';

const CreatePost = () => {
  const [postText, setPostText] = useState();
  const currentUserData = useSelector((state) => state.userReducer);
  const { id } = currentUserData;

  const fetchCreatePost = (e) => {
    e.preventDefault();

    const data = {
      text: postText,
      user: id,
    };

    fetch('http://localhost:1337/posts', {
      method: 'post',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),

    })
      .then((response) => response.json())
      .then((postdata) => {
        console.log(postdata);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="CreatePost">
      <form>
        <input type="text" name="text" placeholder="Put your text here" onChange={(e) => setPostText(e.target.value)} />
        <button type="submit" onClick={fetchCreatePost}>ça part</button>
      </form>
    </div>
  );
};

export default CreatePost;
