import React from "react";
import { compose, withHandlers } from "recompose";
import { connect } from "react-redux";
import BarIcon from "./components/BarIcon";

import { getButtons, getSelectedButton } from "./data/buttons/reducer";
import * as buttonsActionCreators from "./data/buttons/actions";

import "./styles.css";

function ActivityBar(props) {
  return (
    <ul className="ActivityBar">
      {props.buttons.map((button) => (
        <li key={button.id}>
          <BarIcon icon={button} selectButton={props.dispatchSelectButton} />
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  buttons: getButtons(state.Window.activityBar.data.buttons),
  selectedButton: getSelectedButton(state.Window.activityBar.data.buttons),
});

export default compose(
  connect(mapStateToProps),
  withHandlers({
    dispatchSelectButton:
      ({ dispatch }) =>
      (payload) => {
        dispatch(buttonsActionCreators.select(payload));
      },
  })
)(ActivityBar);
