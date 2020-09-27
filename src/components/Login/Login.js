import React, { useCallback, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../Auth';
import app from '../../base';

function Login({ history }) {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input name="email" placeholder="email" type="email" />
        <label>Password</label>
        <input name="password" placeholder="password" type="password" />
      </form>
      <button type="submit">Submit</button>
    </div>
  );
}

export default Login;
