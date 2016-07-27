import React from 'react';
import { Route } from 'react-router';

import App from './components/app';
import FirebaseApp from './components/firebaseApp';

export default(
  <Route path="/" component={App}>
    <Route path="firebase" component={FirebaseApp} />
  </Route>
);
