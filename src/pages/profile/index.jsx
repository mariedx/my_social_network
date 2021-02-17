// import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { React, useEffect, useState } from 'react';

const OtherProfile = () => {
  // const { authorID } = useParams();
  const [authorInfo, setAuthorInfo] = useState('');

  const getAuthorInfo = () => {
    fetch('http://localhost:1337/users/2', {
      method: 'get',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setAuthorInfo(response);
      });
  };

  useEffect(() => getAuthorInfo(), []);

  return (
    <div className="card">
      <h2>Profil de l`auteur:</h2>
      <p>{authorInfo.username}</p>
      <p>{authorInfo.email}</p>
    </div>
  );
};

export default OtherProfile;
