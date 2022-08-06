import React from "react";
import Tab from "./components/Tab";
import { useNavigate } from "react-router-dom";

import "./styles.css";

function Navigation(props) {
  let navigate = useNavigate();
  const files = props.files;
  return (
    <div className="Navigation">
      <ul className="list">
        {files.map((file) => (
          <Tab
            key={file.id}
            onClick={() => {
              navigate(`/${file.page}`);
              props.selectFile(file);
            }}
            onClickClose={() => {
              const newFiles = files.filter((f) => f.id !== file.id);
              if (file.selected) {
                if (newFiles.length > 0) {
                  navigate(`/${newFiles[newFiles.length - 1].page}`);
                } else {
                  navigate("/");
                }
              }
              props.closeFile(file);
            }}
            tab={file}
          />
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
