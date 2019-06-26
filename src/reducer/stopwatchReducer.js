import {
  DECREASE_INTERVAL,
  INCREASE_INTERVAL,
  START_STOPWATCH,
  STOP_STOPWATCH,
  TICK
} from "../actions/types.js";

const initState = {
  interval: 0,
  seconds: 0,
  ticking: false
};

export default function stopwatchReducer(state = initState, action) {
  switch (action.type) {
    case INCREASE_INTERVAL:
      return { ...state, interval: (state.interval += action.payload) };
    case DECREASE_INTERVAL:
      if (state.interval < 1) {
        return { ...state, interval: 0 };
      }
      return { ...state, interval: (state.interval -= action.payload) };
    case START_STOPWATCH:
      return { ...state, ticking: true };
    case STOP_STOPWATCH:
      return { ...state, seconds: 0, ticking: false };
    case TICK:
      if (state.interval === 0) {
        return { ...state, seconds: (state.seconds += 1) };
      }
      return { ...state, seconds: (state.seconds += action.payload / 1000) };
    default:
      return state;
  }
}
