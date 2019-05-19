import React from 'react';
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux';
import { getOpenFiles, getSelectedFile } from './selectors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import FileRow from './components/FileRow'
import * as filesActionCreators from '../../../../../../actions/files/actions';


import './styles.css';

function Explorer(props) {
  const files = props.files;
  console.log(props.selectedFile);
  return (
    <div className="Explorer">
      <div className="Title">EXPLORER</div>
      <div className="OpenEditors">
        <div className="divider">
          <FontAwesomeIcon
              icon={faCaretRight}
              color="#FFFFFF"
              fixedWidth
              className="icon"
              onClick={() => console.log(1)}
            />
          <span className="title">OPEN EDITORS</span>
        </div>
        <ul className="files">
          { files.map(file => 
            <FileRow
              onClick={() => props.dispatchSelectFile(file)}
              file={file}
            />)
          }
        </ul>
      </div>
      <div className="ProjectName"></div>
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
  })
)(Explorer);