/* eslint-disable max-len */
/* eslint-disable no-console */
import { React, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { CurrentUser } from '../../stores/actions';

const EditProfile = () => {
  const currentUserData = useSelector((state) => state.userReducer);
  const {
    id, username, email, // password,
  } = currentUserData;
  const dispatch = useDispatch();

  const [newUsername, setUsername] = useState(username);
  const [newEmail, setEmail] = useState(email);
  // const [newPassword, setPassword] = useState(password);

  console.log(currentUserData);

  const fetchEditedProfile = (e) => {
    e.preventDefault();

    const data = {
      id,
      username: newUsername,
      email: newEmail,
    };

    fetch('http://localhost:1337/users/me', {
      method: 'put',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),

    })
      .then((response) => response.json())
      .then((userdata) => {
        // eslint-disable-next-line no-console
        console.log(userdata);
        dispatch(CurrentUser({
          id,
          username: newUsername,
          email: newEmail,
        }));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="EditProfile">
      <h3>
        {' '}
        Hi
        {' '}
        {username}
        {' '}
        !
        Wanna update your profile ?
        {' '}
      </h3>
      <form>
        <p>Your name</p>
        <input type="text" name="username" placeholder="Put your username here" value={newUsername} onChange={(e) => setUsername(e.target.value)} />
        <p>Your email</p>
        <input type="email" name="email" placeholder="email" value={newEmail} onChange={(e) => setEmail(e.target.value)} />
        {/* <input type="password" name="password" placeholder="password" value={newPassword} onChange={(e) => setPassword(e.target.value)} /> */}
        <button type="submit" onClick={fetchEditedProfile}>ça part</button>
      </form>
    </div>
  );
};

export default EditProfile;
