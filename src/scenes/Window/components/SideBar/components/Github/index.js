import React from 'react';
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux';

import './styles.css';

function Github(props) {
  return (
    <div className="Github">
      <div className="Title">SOURCE CONTROL: GITHUB</div>
      <div className="OpenEditors"></div>
      <div className="ProjectName"></div>
    </div>
  );
}

const mapStateToProps = state => ({
});

export default compose(
  connect(mapStateToProps),
  withHandlers({
  })
)(Github);