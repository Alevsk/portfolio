import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import ActivityBar from "./components/ActivityBar";
import SideBar from "./components/SideBar";
import FileEditor from "../../components/FileEditor";

import "./styles.css";

function Window(props) {
  return (
    <div className="Window">
      <div className="StickyBar">
        <div className="ActivityBar">
          <ActivityBar />
        </div>
        <SideBar />
      </div>
      <FileEditor />
    </div>
  );
}

const mapStateToProps = (state) => ({});

export default compose(connect(mapStateToProps))(Window);
