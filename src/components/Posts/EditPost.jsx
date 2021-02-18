import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';

const EditPost = () => {
  const [postText, setPostText] = useState();
  const currentUserData = useSelector((state) => state.userReducer);
  const { id } = currentUserData;

  const data = {
    user: id,
    text: postText,
  };

  const fetchEditPost = (thepost) => {
    fetch(`http://localhost:1337/posts/${thepost}`, {
      method: 'put',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  return (
    <div className="EditPost">
      <form>
        <input type="text" name="text" placeholder="Put your text here" onChange={(e) => setPostText(e.target.value)} />
        <button type="submit" onClick={fetchEditPost}>ça part</button>
      </form>
    </div>
  );
};

export default EditPost;
