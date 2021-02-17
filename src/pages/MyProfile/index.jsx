import { React, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

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
      {currentUser && currentUser.username + currentUser.email }
      {' '}
    </div>
  );
};

export default Profile;
