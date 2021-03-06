import { React, useState } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { checkIn, CurrentUser } from '../../stores/actions';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const fetchFunction = (e) => {
    e.preventDefault();
    const data = {
      username,
      email,
      password,
    };

    fetch('http://localhost:1337/auth/local/register', {
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

  return (
    <div className="Register">
      <form>
        <input type="text" name="username" placeholder="Put your username here" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" name="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" onClick={fetchFunction}>ça part</button>
      </form>
    </div>
  );
};

export default Register;
