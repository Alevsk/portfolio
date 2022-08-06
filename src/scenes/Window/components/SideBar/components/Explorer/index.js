import React from 'react';
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux';
import { getFiles, getOpenFiles, getSelectedFile, getSectionOpenEditors, getSectionOpenFileExplore } from './selectors';
import FileExplorer from './components/FileExplorer'
import * as filesActionCreators from '../../../../../../actions/files/actions';
import * as sectionOpenEditorsActionCreators from './data/sectionOpenEditors/actions';
import * as sectionOpenFileExplorerActionCreators from './data/sectionOpenFileExplorer/actions';


import './styles.css';

function Explorer(props) {
  const files = props.files;
  const openFiles = props.openFiles;
  const selectedFile = props.selectedFile;
  const sectionOpenEditors = props.sectionOpenEditors;
  const sectionOpenFileExplorer = props.sectionOpenFileExplorer;
  return (
    <div className="Explorer">
      <div className="Title">EXPLORER</div>
      <FileExplorer
        title={"OPEN EDITORS"}
        toggleDisplayFileTree={props.dispatchToggleSectionOpenEditors}
        files={openFiles}
        selectedFile={selectedFile}
        displayFileTree={sectionOpenEditors.display}
        dispatchSelectFile={props.dispatchSelectFile}
      />
      <FileExplorer
        title={"PORTFOLIO"}
        toggleDisplayFileTree={props.dispatchToggleSectionOpenFileExplorer}
        files={files}
        selectedFile={selectedFile}
        displayFileTree={sectionOpenFileExplorer.display}
        dispatchSelectFile={props.dispatchOpenFile}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  files: getFiles(state),
  openFiles: getOpenFiles(state),
  selectedFile: getSelectedFile(state),
  sectionOpenEditors: getSectionOpenEditors(state),
  sectionOpenFileExplorer: getSectionOpenFileExplore(state),
});

export default compose(
  connect(mapStateToProps),
  withHandlers({
    dispatchSelectFile: ({ dispatch }) => payload => {
      dispatch(filesActionCreators.select(payload));
    },
    dispatchOpenFile: ({ dispatch }) => payload => {
      dispatch(filesActionCreators.add(payload));
    },
    dispatchToggleSectionOpenEditors: ({ dispatch }) => () => {
      dispatch(sectionOpenEditorsActionCreators.toggle());
    },
    dispatchToggleSectionOpenFileExplorer: ({ dispatch }) => () => {
      dispatch(sectionOpenFileExplorerActionCreators.toggle());
    },
  })
)(Explorer);