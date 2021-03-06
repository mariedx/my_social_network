import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Navbar = () => (
  <div className="Navbar">
    <Link to="/">Home</Link>
    {' '}
    <Link to="/register">Register</Link>
    {' '}
    <Link to="/login">Login</Link>
    {' '}
    <Link to="/myprofile">My Profile</Link>
  </div>
);

export default Navbar;
