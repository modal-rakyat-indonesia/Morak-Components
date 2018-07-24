import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
import Heading from './heading';
import Subheading from './subheading';

import '../../styles/index.scss';

const Home = () => (
  <div>
    <LoadingBar className="loading" />
    <Heading />
    <Subheading />
  </div>
);
export default Home;
