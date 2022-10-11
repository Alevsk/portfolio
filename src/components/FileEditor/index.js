import React from "react";
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import Navigation from "./components/Navigation";
import TextEditor from "./components/TextEditor";
import { getOpenFiles, getSelectedFile, getFiles } from "./selectors";
import * as filesActionCreators from "../../actions/files/actions";

import "./styles.css";

class FileEditor extends React.Component {
  componentDidMount() {
    const path = window.location.pathname.split("/");
    if (path.length >= 2) {
      const name = path[1];
      const files = this.props.files.filter((file) => file.page === name);
      if (files.length > 0) {
        const file = files[0];
        this.props.dispatchSelectFile(file, [file]);
      } else {
        window.location.href = "/whoami";
      }
    }
  }
  render() {
    return (
      <div className="FileEditor">
        <div className="wrapper">
          <Navigation
            files={this.props.openFiles}
            selectFile={this.props.dispatchSelectFile}
            closeFile={this.props.dispatchCloseFile}
          />
          <TextEditor selectedFile={this.props.selectedFile} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  files: getFiles(state),
  openFiles: getOpenFiles(state),
  selectedFile: getSelectedFile(state),
});

export default compose(
  connect(mapStateToProps),
  withHandlers({
    dispatchSelectFile:
      ({ dispatch }) =>
      (payload, files) => {
        dispatch(filesActionCreators.select(payload, files));
      },
    dispatchCloseFile:
      ({ dispatch }) =>
      (payload) => {
        dispatch(filesActionCreators.remove(payload));
      },
  })
)(FileEditor);
