/* eslint-disable no-console */
import { React, useState } from 'react';
import { useSelector } from 'react-redux';

const EditProfile = () => {
  const currentUserData = useSelector((state) => state.userReducer);
  const { username, email, password } = currentUserData;

  const [newUsername, setUsername] = useState(username);
  const [newEmail, setEmail] = useState(email);
  const [newPassword, setPassword] = useState(password);

  console.log(currentUserData);

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
        <input type="text" name="username" placeholder="Put your username here" value={newUsername} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" name="email" placeholder="email" value={newEmail} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" placeholder="password" value={newPassword} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">ça part</button>
      </form>
    </div>
  );
};

export default EditProfile;
