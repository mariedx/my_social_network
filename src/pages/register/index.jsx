/* eslint-disable no-console */
import React from 'react';

const Register = () => {
  const data = {
    username: '',
    email: '',
    password: '',
  };

  fetch('http://localhost:1337/auth/local/register', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  console.log(data);

  return (
    <div className="Register">
      <form>
        <input type="text" name="username" placeholder="Put your username here" />
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit">ça part</button>
      </form>
    </div>
  );
};

export default Register;
