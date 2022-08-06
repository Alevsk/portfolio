import { createSelector } from "reselect";

export const getFiles = (state) => state.Window.sideBar.explorer.data.files;

export const getOpenFiles = (state) => state.FileEditor.data.files;

export const getSectionOpenEditors = (state) =>
  state.Window.sideBar.explorer.data.sectionOpenEditors;

export const getSectionOpenFileExplore = (state) =>
  state.Window.sideBar.explorer.data.sectionOpenFileExplorer;

export const getSelectedFile = createSelector([getOpenFiles], (files) => {
  const selected = files.filter((file) => file.selected);
  return selected.length > 0 ? selected[0] : null;
});
