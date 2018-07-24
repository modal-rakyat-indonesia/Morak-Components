import React from 'react';

import '../styles/ribbon.scss';

class Ribbon extends React.Component {
  componentWillMount() {
    this.setState({
      isDevelopment: process.env.NODE_ENV !== 'production'
    });
  }

  render() {
    return this.state.isDevelopment ? (
      <div className="box">
        <div className="ribbon"><span>DEVELOPMENT MODE</span></div>
      </div>
    ) : '';
  }
}

export default Ribbon;
