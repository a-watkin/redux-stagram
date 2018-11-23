import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.styl';

// import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid} />
      <Route path="/view/:postId" component={Single} />
    </Route>
  </Router>
);

render(
  <div>
    <Main>
      <p>grrr</p>
    </Main>
    <Single />
    <PhotoGrid />
  </div>,

  document.getElementById('root')
);
