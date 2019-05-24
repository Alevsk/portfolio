import React from 'react';
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux';
import { getOpenFiles, getSelectedFile, getSectionOpenEditors } from './selectors';
import FileExplorer from './components/FileExplorer'
import * as filesActionCreators from '../../../../../../actions/files/actions';
import * as sectionOpenEditorsActionCreators from './data/sectionOpenEditors/actions';


import './styles.css';

function Explorer(props) {
  const openFiles = props.openFiles;
  const sectionOpenEditors = props.sectionOpenEditors;
  return (
    <div className="Explorer">
      <div className="Title">EXPLORER</div>
      <FileExplorer
        title={"OPEN EDITORS"}
        toggleDisplayFileTree={props.dispatchToggleSectionOpenEditors}
        files={openFiles}
        displayFileTree={sectionOpenEditors.display}
        dispatchSelectFile={props.dispatchSelectFile}
      />
      {/* <div className="ProjectName">
        <div className="divider">
          <FontAwesomeIcon
              icon={faCaretRight}
              color="#FFFFFF"
              fixedWidth
              className="icon"
            />
          <span className="title">PORTFOLIO</span>
        </div>
      </div> */}

    </div>
  );
}

const mapStateToProps = state => ({
  openFiles: getOpenFiles(state),
  selectedFile: getSelectedFile(state),
  sectionOpenEditors: getSectionOpenEditors(state),
});

export default compose(
  connect(mapStateToProps),
  withHandlers({
    dispatchSelectFile: ({ dispatch }) => payload => {
      dispatch(filesActionCreators.select(payload));
    },
    dispatchToggleSectionOpenEditors: ({ dispatch }) => () => {
      dispatch(sectionOpenEditorsActionCreators.toggle());
    },
  })
)(Explorer);