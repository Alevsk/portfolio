import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.css";

function BarIcon(props) {
  let button = (
    <FontAwesomeIcon
      icon={props.icon.icon}
      size="2x"
      color={`${props.icon.selected ? "#FFFFFF" : "#909398"}`}
      fixedWidth
      className="BarIcon"
      onClick={() => !props.icon.url && props.selectButton(props.icon)}
    />
  );
  if (props.icon.url) {
    button = (
      <a href={props.icon.url} target="_blank" rel="noopener noreferrer">
        {button}
      </a>
    );
  }
  return button;
}

export default BarIcon;
