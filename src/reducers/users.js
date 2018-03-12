// Sample reducer
export const users = (state=[], action) => {
  if(action.type === 'ACTION_DONE') {
    return state;
  }
  return state;
}