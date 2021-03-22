import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function ProgressBar({ timerValues, isTimerRunning }) {
  if (timerValues.isEnabled === true) {
    let timeBar =
      ((timerValues.baseTime * 60 - timerValues.focusSeconds) /
        (timerValues.baseTime * 60)) * 100;
    let breakTimeBar =
      ((timerValues.breakTimeBase * 60 - timerValues.breakTimeInSecs) /
        (timerValues.breakTimeBase * 60)) * 100;

      if (timerValues.isFocused === true) {
        return (
          <div>
            <div className="row mb-2">
              <div className="col">
                <h2 data-testid="session-title">
                  Focusing for {minutesToDuration(timerValues.baseTime)} minutes
                </h2>
                <p className="lead" data-testid="session-sub-title">
                  {secondsToDuration(timerValues.focusSeconds)} remaining
                </p>
              </div>
            </div>
            <div>{
              timerValues.isEnabled === true && isTimerRunning === false ?
                (<h4>PAUSED</h4>) : null
            }</div>
            <div className="row mb-2">
              <div className="col">
                <div className="progress" style={{ height: "20px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={timeBar} // TODO: Increase aria-valuenow as elapsed time increases
                    style={{ width: `${timeBar}%` }} // TODO: Increase width % as elapsed time increases
                  />
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <div className="row mb-2">
              <div className="col">
                <h2 data-testid="session-title">
                  On Break for {minutesToDuration(timerValues.breakTimeBase)} minutes
                </h2>
                <p className="lead" data-testid="session-sub-title">
                  {secondsToDuration(timerValues.breakTimeInSecs)} remaining
                </p>
              </div>
            </div>
            <div>{
              timerValues.isEnabled === true && isTimerRunning === false ?
                (<h4>PAUSED</h4>) : null
            }</div>
            <div className="row mb-2">
              <div className="col">
                <div className="progress" style={{ height: "20px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={breakTimeBar} // TODO: Increase aria-valuenow as elapsed time increases
                    style={{ width: `${breakTimeBar}%` }} // TODO: Increase width % as elapsed time increases
                  />
                </div>
              </div>
            </div>
          </div>
        );
      }
    } else {
      return null;
    }
  }


  export default ProgressBar;