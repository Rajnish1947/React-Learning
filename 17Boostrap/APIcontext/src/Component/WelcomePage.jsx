// WelcomePage.js
import React from 'react';
import MyContext from './Context';

const WelcomePage = () => {
  return (
    <MyContext.Consumer>
      {(value) => (
        <div>
          <h1>Welcome to My App</h1>
          <p>Context value: {value}</p>
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default WelcomePage;
