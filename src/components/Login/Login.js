import React, { useCallback, useContext } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
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
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          className="email"
          name="email"
          placeholder="email"
          type="email"
        />
        <label>Password</label>
        <input
          className="password"
          name="password"
          placeholder="password"
          type="password"
        />
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
      <button onClick={() => app.auth().signOut()}>Sign Out</button>
    </div>
  );
};

export default withRouter(Login);
