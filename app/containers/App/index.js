/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          color: 'black',
          boxShadow: '0 0 12px black',
        }}
      >
        <p>Menu</p>
      </div>
      <Switch style={{}}>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
