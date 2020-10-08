import React, { useCallback, useContext } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { Button, Input } from '@material-ui/core';
import { AuthContext } from '../../Auth.js';
import app from '../../base';

const Login = ({ history }) => {
  const handleSubmit = useCallback(
    async (event) => {
      console.log('eveeeee', event);
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        localStorage.setItem('isAuthenticated', true);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history],
  );

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser, 'currr');
  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-wrapper">
      <h1 className="page-title">Login</h1>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <Input
            required
            placeholder="Email"
            className="email"
            name="email"
            type="email"
          />
          <Input
            required
            placeholder="Password"
            className="password"
            name="password"
            type="password"
          />
          <Button type="submit" className="primary-button" variant="contained">
            Login
          </Button>
        </form>

        <h5 className="page-title">
          New User ? <Link to="/signup"> Sign Up</Link>
        </h5>
      </div>
    </div>
  );
};

export default withRouter(Login);
