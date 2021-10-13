import React, { memo } from 'react';
import './Controls.css';

const Controls = ({ start, reset, pause, status }) => (
  <div className="Controls">
    {!status && (
      <button onClick={start} className="start" type="button">
        Start
      </button>
    )}

    {status === 'Finished' && (
      <button onClick={start} className="start" type="button">
        Restart
      </button>
    )}

    {(status === 'Paused' || status === 'Running') && (
      <div>
        <button onClick={reset} className="reset" type="button">
          Reset
        </button>
        <button
          onClick={pause}
          className={status === 'Paused' ? 'resume' : 'pause'}
          type="button"
        >
          {status === 'Paused' ? 'Resume' : 'Pause'}
        </button>
      </div>
    )}
  </div>
);

export default memo(Controls);
