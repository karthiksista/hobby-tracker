import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/SignUp/Signup';
import { AuthContext } from './Auth';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import styled from '@emotion/styled';
import { useTheme } from './components/ThemContext/ThemeContext';
import { ReactComponent as MoonIcon } from './assets/moon.svg';
import { ReactComponent as SunIcon } from './assets/sun.svg';
import Nav from './components/Nav/Nav';

const Wrapper = styled('div')`
  background: ${(props) => props.theme.background};
  width: 100vw;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen';
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  MuiInputBase-input {
    color: ${(props) => props.theme.body};
  }

  flex-direction: column;
  // text-align: center;
  // justify-content: space-between;
  display: flex;
`;

function App() {
  const themeState = useTheme();
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Wrapper>
          {currentUser ? (
            <Nav>
              <button onClick={() => themeState.toggle()}>
                {themeState.dark ? <SunIcon /> : <MoonIcon />}
              </button>
            </Nav>
          ) : (
            ''
          )}
          <div className="main-content">
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </div>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
