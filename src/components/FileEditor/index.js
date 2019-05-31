import React from 'react';
import { compose, withHandlers, lifecycle } from 'recompose'
import { connect } from 'react-redux';
import Navigation from './components/Navigation';
import TextEditor from './components/TextEditor';
import { getOpenFiles, getSelectedFile, getFiles } from './selectors'
import * as filesActionCreators from '../../actions/files/actions';

import './styles.css';

function FileEditor(props) {
  return (
    <div className="FileEditor">
      <div className="wrapper">
        <Navigation
          files={props.openFiles}
          selectFile={props.dispatchSelectFile}
          closeFile={props.dispatchCloseFile}
        />
        <TextEditor selectedFile={props.selectedFile} />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  files: getFiles(state),
  openFiles: getOpenFiles(state),
  selectedFile: getSelectedFile(state),
});

export default compose(
  connect(mapStateToProps),
  withHandlers({
    dispatchSelectFile: ({ dispatch }) => (payload, files) => {
      dispatch(filesActionCreators.select(payload, files));
    },
    dispatchCloseFile: ({ dispatch }) => payload => {
      dispatch(filesActionCreators.remove(payload));
    },
  }),
  lifecycle({
    componentDidMount() {
      const path = window.location.pathname.split('/');
      if (path.length >= 2) {
        const name = path[1];
        const files = this.props.files.filter(file => file.name.split('.')[0] === name);
        if (files.length > 0) {
          const file = files[0];
          this.props.dispatchSelectFile(file, [file]);
        }
      }
    },
  }),
)(FileEditor);