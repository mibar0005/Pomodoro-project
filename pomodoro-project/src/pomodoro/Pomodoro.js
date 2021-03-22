import React, { useState } from "react";
import ButtonHandler from "./ButtonHandler";
import StopButton from "./StopButton";
import { minutesToDuration} from "../utils/duration";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import ProgressBar from "./ProgressBar";


function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const [timerValues, setTimerValues] = useState({
    //set the default time 
    baseTime: 25,
    //Set the max time
    maxTime: 60,
    //Set the min time
    minTime: 5,
    //incremenets 
    incrementTime: 5,
    //Base time in seconds
    focusSeconds: (25 * 60),
    //base of break time
    breakTimeBase: 5,
    //max time allowed for break
    breakTimeMax: 15,
    //Minimun break time 
    breakTimeMin: 1,
    //Break increments
    breakIncrements: 1,
    //Break time in seconds 
    breakTimeInSecs: (5 * 60),
    isFocused: true,
    isEnabled: false,
  });

  useInterval(
    () => {
      setTimerValues(() => {
        if (timerValues.isFocused) {
          if (timerValues.focusSeconds > 0) {
            return { ...timerValues, focusSeconds: timerValues.focusSeconds - 1 };
          } else {
            Audio("/alarm-clock-buzzer-beeps.mp3") 
            return {
              ...timerValues,
              focusSeconds: timerValues.baseTime * 60,
              isFocused: false,
            };
          }
        } else {
          if (timerValues.breakTimeInSecs > 0) {
            return { ...timerValues, breakTimeInSecs: timerValues.breakTimeInSecs - 1 };
          } else {
            Audio("/alarm-clock-buzzer-beeps.mp3") 
            return {
              ...timerValues,
              breakTimeInSecs: timerValues.breakTimeBase * 60,
              isFocused: true,
            };
          }
        }
      });
    },
    isTimerRunning ? 1000 : null
  );

  //Function to play and pause 
  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
    setTimerValues({ ...timerValues, isEnabled: true });
  }

  return (
    <div className="pomodoro">
      <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              {/* TODO: Update this text to display the current focus session duration */}
              Focus Duration: {minutesToDuration(timerValues.baseTime)}
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
              <ButtonHandler
                type="button"
                className="btn btn-secondary"
                dataId="decrease-focus"
                secondClass="oi oi-minus"
                timerValues={timerValues}
                setTimerValues={setTimerValues}
              />

              {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
              <ButtonHandler
                type="button"
                className="btn btn-secondary"
                dataId="increase-focus"
                secondClass="oi oi-plus"
                timerValues={timerValues}
                setTimerValues={setTimerValues}
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* TODO: Update this text to display the current break session duration */}
                Break Duration: {minutesToDuration(timerValues.breakTimeBase)}
              </span>
              <div className="input-group-append">
                <ButtonHandler
                  type="button"
                  className="btn btn-secondary"
                  dataId="decrease-break"
                  secondClass="oi oi-minus"
                  timerValues={timerValues}
                  setTimerValues={setTimerValues}
                />
                <ButtonHandler
                  type="button"
                  className="btn btn-secondary"
                  dataId="increase-break"
                  secondClass="oi oi-plus"
                  timerValues={timerValues}
                  setTimerValues={setTimerValues}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
            <StopButton
              type="button"
              className="btn btn-secondary"
              title="Stop the session"
              classStop="oi oi-media-stop"
              isTimerRunning={isTimerRunning}
              timerValues={timerValues}
              setTimerValues={setTimerValues}
              playPause={playPause}
            />
          </div>
        </div>
      </div>
      <ProgressBar timerValues={timerValues} isTimerRunning={isTimerRunning} />
    </div>
  );
}

export default Pomodoro;
