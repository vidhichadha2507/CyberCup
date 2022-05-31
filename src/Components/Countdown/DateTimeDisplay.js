import React from 'react';

import "./DateTimeDisplay.css"

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? type === "Sec" ? 'sec cell danger' : 'cell danger' : type === "Sec" ? 'sec cell' : 'cell'}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;