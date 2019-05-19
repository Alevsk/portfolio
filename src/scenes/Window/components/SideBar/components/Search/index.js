import React from 'react';
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux';

import './styles.css';

function Search(props) {
  return (
    <div className="Search">
      <div className="Title">SEARCH</div>
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
)(Search);