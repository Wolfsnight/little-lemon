import jest from "jest-mock";
import {initializeTimes, updateTimes} from "./availableTimes";

beforeAll(() => {
  // Mock für `window.fetchAPI`, damit Tests keine echte API brauchen
  window.fetchAPI = jest.fn().mockImplementation((date) => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  });
});

test("initializeTimes should return the correct initial available times", () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  expect(initializeTimes()).toEqual(expectedTimes);
});

test("updateTimes should return the same state if no valid action is provided", () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const action = {type: "INVALID_ACTION"};
  expect(updateTimes(initialState, action)).toEqual(initialState);
});

test("updateTimes should return updated available times when called with UPDATE_DATE action", () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const action = {type: "UPDATE_DATE", payload: "2023-10-10"};

  const updatedState = updateTimes(initialState, action);
  expect(updatedState).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});
