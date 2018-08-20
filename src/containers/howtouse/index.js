import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const HowToUse = () => (
  <div>
    <h2>
      How To Use
    </h2>
    <p>This page contains short tutorial on how to use this style guide on your project</p>
  </div>
);

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

HowToUse.defaultProps = {
};

HowToUse.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HowToUse);
