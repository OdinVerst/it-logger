import React, { Fragment, useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import SearchNavbar from './components/layout/SearchNavbar';

const App = () => {
  useEffect(() => {
    //Init matarialize JS
    M.AutoInit();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <SearchNavbar />
    </Fragment>
  );
};

export default App;
