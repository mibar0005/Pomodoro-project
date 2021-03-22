import React from "react";

function StopButton({
  isTimerRunning,
  playPause,
  timerValues,
  setTimerValues,
  type,
  title,
  className,
  classStop,
}) {
  const stopHandler = () => {
    console.log("sanity");
    if (isTimerRunning) playPause();
    console.log("sanity 2");
    setTimerValues({
      ...timerValues,
      focusSeconds: timerValues.baseTime * 60,
      breakTimeInSecs: timerValues.breakTimeBase * 60,
      isFocused: true,
      isEnabled: false,
    });
  };

  if (!timerValues.isEnabled) {
    return (
      <button
        type={type}
        className={className}
        title={title}
        onClick={stopHandler}
        disabled={true}
      >
        <span className={classStop} />
      </button>
    );
  } else {
    return (
      <button
        type={type}
        className={className}
        title={title}
        onClick={stopHandler}
      >
        <span className={classStop} />
      </button>
    );
  }
}

export default StopButton;
