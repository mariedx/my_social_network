import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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

  const getCurrentUser = (state) => state;
  const { id, username, email } = useSelector(getCurrentUser);

  console.log(id);
  console.log(username);
  console.log(email);

  return (
    <div>
      {' '}
      {!currentUser && 'loading'}
      {' '}
      {currentUser && currentUser.username + currentUser.email}
      {' '}
    </div>
  );
};

export default Profile;
