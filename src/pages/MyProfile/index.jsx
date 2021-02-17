/* eslint-disable no-console */
import { React, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import EditProfile from './EditProfile';

const Profile = () => {
  const [currentUser, setCurrentUser] = useState('');

  const myProfileDisplay = () => {
    fetch('http://localhost:1337/users/me', {
      method: 'get',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((jwt) => {
        console.log(jwt);
        setCurrentUser(jwt);
      });
  };

  useEffect(() => {
    myProfileDisplay();
  }, []);

  return (
    <div>
      {' '}
      {!currentUser && 'loading'}
      {' '}
      {currentUser && <EditProfile />}
      {' '}
    </div>
  );
};

export default Profile;
