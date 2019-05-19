import React from 'react';
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux';
import get from 'lodash/get';
import Explorer from './components/Explorer';
import Search from './components/Search';
import Github from './components/Github';
import { getSelectedButton } from './selectors'

import './styles.css';

function SideBar(props) {
  let view = null;
  const id = get(props.selectedButton, 'id', null);
  switch(id) {
    case 'explorer':
        view = <Explorer />
        break;
    case 'search':
        view = <Search />
        break;
    case 'github':
        view = <Github />
        break;
    default:
  }

  return (
    <div className={`SideBar ${!id ? 'hidden' : ''}`}>
      {view}
    </div>
  );
}

const mapStateToProps = state => ({
  selectedButton: getSelectedButton(state),
});

export default compose(
  connect(mapStateToProps),
  withHandlers({
  })
)(SideBar);