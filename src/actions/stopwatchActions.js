import {DECREASE_INTERVAL, INCREASE_INTERVAL, START_STOPWATCH, STOP_STOPWATCH, TICK} from
        "./types.js";



export const increaseInterval = () => (dispatch) => {
    dispatch({
        type: INCREASE_INTERVAL,
        payload: 1000
    })

};
export const decreaseInterval = () => (dispatch) => {
    dispatch({
        type: DECREASE_INTERVAL,
        payload: 1000
    })
};
let timer = null;
export const startStopwatch = (interval) => (dispatch) => {

    clearInterval(timer);
    timer = setInterval(() => dispatch(tick(interval)), interval);
    dispatch({type: START_STOPWATCH});

};
const tick = (interval) => {
    return {type: TICK,payload:interval}
};
export const stopStopwatch = () => {
    clearInterval(timer);
    return {type: STOP_STOPWATCH};
};
