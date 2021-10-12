import React from 'react';
import './TimeDisplay.css';

function pad2(num) {
  return num > 9 ? num : `0${num}`;
}

export function formatTime(time) {
  const minutes = pad2(Math.floor(time / 60));
  const seconds = pad2(Math.floor(time % 60));

  return `${minutes}:${seconds}`;
}

const TimeDisplay = ({ time, status, progress }) => {
  if (![1500, 300, 900].includes(time)) {
    document.title = `(${formatTime(time)}) Check it Now!`;
  }

  return (
    <div className="TimeDisplay">
      <div>
        <h1>{formatTime(time)}</h1>
      </div>
    </div>
  );
};

export default TimeDisplay;
