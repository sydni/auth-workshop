import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Welcome from './components/welcome';
import FirebaseApp from './components/firebaseApp';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="firebase" component={FirebaseApp} />
  </Route>
);
