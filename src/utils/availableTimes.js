export function initializeTimes() {
  if (!window.fetchAPI) {
    console.error("fetchAPI is not defined");
    return [];
  }
  const today = new Date();
  return window.fetchAPI(today);
}

export function updateTimes(state, action) {
  if (!window.fetchAPI) {
    console.error("fetchAPI is not defined");
    return state;
  }

  switch (action.type) {
    case "UPDATE_DATE":
      return window.fetchAPI(new Date(action.payload));
    default:
      return state;
  }
}
