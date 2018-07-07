export const WINDOW_SIZE_CHANGE = 'WINDOW_SIZE_CHANGE';
export const TOGGLE_MOBILE_SIDE_MENU = 'TOGGLE_MOBILE_SIDE_MENU';

export const changeWindowSize = (size) => ({
  type: WINDOW_SIZE_CHANGE,
  size
});

export const toggleMobileSideMenu = (payload) => ({
  type: TOGGLE_MOBILE_SIDE_MENU,
  payload
});
