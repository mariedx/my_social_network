/* eslint-disable no-console */
import React from 'react';

const Register = () => {
  const fetchFunction = (e) => {
    e.preventDefault();

    const data = {
      username: 'marie',
      email: 'mdmd@gmail.com',
      password: 'blabla',
    };

    fetch('http://localhost:1337/auth/local/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
    console.log(data);
  };

  return (
    <div className="Register">
      <form>
        <input type="text" name="username" placeholder="Put your username here" />
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button type="submit" onClick={fetchFunction}>ça part</button>
      </form>
    </div>
  );
};

export default Register;
