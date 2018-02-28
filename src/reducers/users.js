export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USERS": {
      return action.payload
      break;
    }
  }

  return state;
}