import React from 'react';
import app from '../../base';

function Home() {
  return (
    <div className="home-page">
      <h1>Home</h1>
      <button
        onClick={() => {
          app.auth().signOut();
        }}>
        Sign Out
      </button>
    </div>
  );
}

export default Home;
