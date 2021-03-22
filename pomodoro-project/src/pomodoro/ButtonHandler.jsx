import React from "react";

function ButtonHandler({
  type,
  className,
  secondClass,
  dataId,
  timerValues,
  setTimerValues,
}) {
  const clickHandler = () => {
    if (
      dataId.includes("decrease-focus") &&
      timerValues.baseTime > timerValues.minTime
    ) {
      timerValues.baseTime -= timerValues.incrementTime;
      timerValues.focusSeconds = timerValues.baseTime * 60;
    } else if (
      dataId.includes("increase-focus") &&
      timerValues.baseTime < timerValues.maxTime
    ) {
      timerValues.baseTime += timerValues.incrementTime;
      timerValues.focusSeconds = timerValues.baseTime * 60;
    } else if (
      dataId.includes("decrease-break") &&
      timerValues.breakTimeBase > timerValues.breakTimeMin
    ) {
      timerValues.breakTimeBase -= timerValues.breakIncrements;
      timerValues.breakTimeInSecs = timerValues.breakTimeBase * 60;
    } else if (
      dataId.includes("increase-break") &&
      timerValues.breakTimeBase < timerValues.breakTimeMax
    ) {
      timerValues.breakTimeBase += timerValues.breakIncrements;
      timerValues.breakTimeInSecs = timerValues.breakTimeBase * 60;
    }

    setTimerValues({ ...timerValues });
  };

  if (timerValues.isEnabled) {
    return (
      <button
        type={type}
        className={className}
        data-testid={dataId}
        onClick={clickHandler}
        disabled={true}
      >
        <span className={secondClass} />
      </button>
    );
  } else {
    return (
      <button
        type={type}
        className={className}
        data-testid={dataId}
        onClick={clickHandler}
      >
        <span className={secondClass} />
      </button>
    );
  }
}

export default ButtonHandler;
