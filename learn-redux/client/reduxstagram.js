import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.styl';

// import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

render(
  <div>
    <Main />
    <Single />
    <PhotoGrid />
  </div>,

  document.getElementById('root')
);
