import React from 'react';
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux';
import { getOpenFiles, getSelectedFile, getSectionOpenEditors } from './selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import FileRow from './components/FileRow'
import * as filesActionCreators from '../../../../../../actions/files/actions';
import * as sectionOpenEditorsActionCreators from './data/sectionOpenEditors/actions';


import './styles.css';

function Explorer(props) {
  const files = props.files;
  const sectionOpenEditors = props.sectionOpenEditors;
  return (
    <div className="Explorer">
      <div className="Title">EXPLORER</div>
      <div className="OpenEditors">
        <div className="divider" onClick={props.dispatchToggleSectionOpenEditors}>
          <FontAwesomeIcon
              icon={sectionOpenEditors.display ? faCaretDown : faCaretRight }
              color="#FFFFFF"
              fixedWidth
              className="icon"
            />
          <span className="title">OPEN EDITORS</span>
        </div>
        <ul className={`files ${!sectionOpenEditors.display ? 'hidden' : ''}`}>
          { files.map(file => 
            <FileRow
              onClick={() => props.dispatchSelectFile(file)}
              file={file}
            />)
          }
        </ul>
      </div>
      <div className="ProjectName">
        <div className="divider">
          <FontAwesomeIcon
              icon={faCaretRight}
              color="#FFFFFF"
              fixedWidth
              className="icon"
            />
          <span className="title">PORTFOLIO</span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  files: getOpenFiles(state),
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