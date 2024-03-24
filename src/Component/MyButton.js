import "./MyButtonStyles.css";
import React, { useState } from "react";
import PropTypes from "prop-types";

function MyButton({ count, onClick, style }) {
  return (
    <button style={style} className="btn" onClick={onClick}>
      {count}
    </button>
  );
}

MyButton.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
};

const App1 = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 2);
  };

  const decreaseCount = () => {
    setCount(count - 2);
  };

  return (
    <div>
      <h3>{count}</h3>
      <div className="app">
        <MyButton
          count="-"
          style={{ background: "red" }}
          onClick={decreaseCount}
        />
        <MyButton
          count="+"
          style={{ background: "green" }}
          onClick={increaseCount}
        />
      </div>
    </div>
  );
};
export default App1;
