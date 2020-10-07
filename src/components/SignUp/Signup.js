import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import app from '../../base';

import { useFormik } from 'formik';

const Signup = ({ history }) => {
  var actionCodeSettings = {
    url: 'https://karthiksista.netlify.app/',

    handleCodeInApp: true,
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      handleSignUpSubmit(values);
    },
    validate: (value) => {},
  });

  const handleSignUpSubmit = useCallback(
    async (values) => {
      const { email, password } = values;
      try {
        await app.auth().createUserWithEmailAndPassword(email, password);

        try {
          await app
            .auth()
            .currentUser.sendEmailVerification(actionCodeSettings);
        } catch (error) {
          console.log(error, 'error');
        }
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history],
  );
  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={formik.handleSubmit}>
        <label>Email</label>
        <input
          placeholder="Email"
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label>Password</label>
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default withRouter(Signup);
