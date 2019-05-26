import React from 'react';
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux';
import Navigation from './components/Navigation';
import TextEditor from './components/TextEditor';
import { getOpenFiles, getSelectedFile } from './selectors'
import * as filesActionCreators from '../../actions/files/actions';

import './styles.css';

function FileEditor(props) {
  return (
    <div className="FileEditor">
      <div className="wrapper">
        <Navigation
          files={props.files}
          selectFile={props.dispatchSelectFile}
          closeFile={props.dispatchCloseFile}
        />
        <TextEditor selectedFile={props.selectedFile} />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  files: getOpenFiles(state),
  selectedFile: getSelectedFile(state),
});

export default compose(
  connect(mapStateToProps),
  withHandlers({
    dispatchSelectFile: ({ dispatch }) => payload => {
      dispatch(filesActionCreators.select(payload));
    },
    dispatchCloseFile: ({ dispatch }) => payload => {
      dispatch(filesActionCreators.remove(payload));
    },
  })
)(FileEditor);