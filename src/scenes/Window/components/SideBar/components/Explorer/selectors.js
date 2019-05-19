import { createSelector } from 'reselect'

const getFiles = (state) => state.FileEditor.data.files;

export const getOpenFiles = createSelector(
  [ getFiles ],
  (files) => files
);

export const getSelectedFile = createSelector(
  [ getFiles ],
  (files) => {
    const selected = files.filter(file => file.selected);
    return selected.length > 0 ? selected[0] : null;
  }
);
