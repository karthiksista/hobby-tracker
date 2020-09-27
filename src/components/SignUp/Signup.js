import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import app from '../../base';

const Signup = ({ history }) => {
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input placeholder="Email" type="email" name="email" />
        <label>Password</label>
        <input placeholder="Password" type="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default withRouter(Signup);
