import React from "react";
import "./App.css";
import { connect } from "react-redux";
import {
  decreaseInterval,
  increaseInterval,
  startStopwatch,
  stopStopwatch
} from "./actions/stopwatchActions.js";

class App extends React.Component {
  render() {
    const { ticking, interval, seconds } = this.props.stopWatch;
    return (
      <div className="App">
        <div>
          {`Refresh interval  ${interval / 1000} sec      `}
          <button
            disabled={ticking}
            onClick={() => this.props.increaseInterval()}
          >
            increase
          </button>
          <button
            disabled={ticking}
            onClick={() => this.props.decreaseInterval()}
          >
            decrease
          </button>
        </div>

        <div>
          {`Stopwatch:  ${seconds} sec     `}
          <button onClick={() => this.props.startStopwatch(interval)}>
            Start
          </button>
          <button onClick={() => this.props.stopStopwatch()}>Stop</button>
        </div>
        {ticking && interval === 0 && (
          <div>Ok, it's working, but u sure that interval should be zero?</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stopWatch: state.stopWatch
  };
};

export default connect(
  mapStateToProps,
  { increaseInterval, decreaseInterval, startStopwatch, stopStopwatch }
)(App);
