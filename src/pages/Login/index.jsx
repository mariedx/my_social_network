/* eslint-disable no-console */
import { React, useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { checkIn, CurrentUser } from '../../stores/actions';

const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const fetchFunction = (e) => {
    e.preventDefault();
    const data = {
      identifier,
      password,
    };

    fetch('http://localhost:1337/auth/local', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((userdata) => {
        Cookies.set('token', userdata.jwt);
        // eslint-disable-next-line no-console
        console.log(userdata);
        dispatch(checkIn());
        dispatch(CurrentUser({
          id: userdata.user.id,
          username: userdata.user.username,
          email: userdata.user.email,
        }));
        history.push('/');
      });
  };

  // const logOut = (e) => {
  //   e.preventDefault();
  //   Cookies.remove('token');
  //   dispatch(checkOut());
  //   history.push('/');
  // };

  return (
    <div className="Login">
      <form>
        <input type="email" name="email" placeholder="email" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
        <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" onClick={fetchFunction}>ça part</button>
      </form>
    </div>
  );
};

export default Login;
