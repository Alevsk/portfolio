export const SELECT = 'FileEditor/data/files/SELECT';
export const ADD = 'FileEditor/data/files/ADD';
export const REMOVE = 'FileEditor/data/files/REMOVE';

export const select = payload => ({
  type: SELECT,
  payload,
});

export const add = payload => ({
  type: ADD,
  payload,
});

export const remove = payload => ({
  type: REMOVE,
  payload,
});
