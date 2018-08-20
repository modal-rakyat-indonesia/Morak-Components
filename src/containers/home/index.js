import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
import Heading from './heading';

import '../../styles/index.scss';

const Home = () => (
  <div>
    <LoadingBar className="loading" />
    <Heading />
  </div>
);
export default Home;
