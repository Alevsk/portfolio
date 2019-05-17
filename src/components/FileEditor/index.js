import React from 'react';
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux';
import Navigation from './components/Navigation';
import TextEditor from './components/TextEditor';

import { getOpenFiles, getSelectedFile } from './data/files/reducer';
import * as filessActionCreators from './data/files/actions';

import './styles.css';

function FileEditor(props) {
  return (
    <div className="FileEditor">
      <div className="wrapper">
        <Navigation files={props.files} selectFile={props.dispatchSelectFile} />
        <TextEditor selectedFile={props.selectedFile} />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  files: getOpenFiles(state.FileEditor.data.files),
  selectedFile: getSelectedFile(state.FileEditor.data.files),
});

export default compose(
  connect(mapStateToProps),
  withHandlers({
    dispatchSelectFile: ({ dispatch }) => payload => {
      dispatch(filessActionCreators.select(payload));
    },
    // dispatchLoginUser: ({ dispatch }) => () => {
    //   dispatch(loginUser());
    // },
    // sayHi: () => () => {
    //   console.log('Hi!!');
    // }
  })
)(FileEditor);