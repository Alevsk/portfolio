import { createSelector } from "reselect";

const getButtons = (state) => state.Window.activityBar.data.buttons;

export const getSelectedButton = createSelector([getButtons], (buttons) => {
  const selected = buttons.filter((button) => button.selected);
  return selected.length > 0 ? selected[0] : null;
});
