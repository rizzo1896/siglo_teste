import React from "react";

function Button({ children, color }) {
  return (
    <button
      style={{ backgroundColor: `${color}` }}
      className={`py-1 px-2 rounded text-white mr-2 last:mr-0`}
    >
      {children}
    </button>
  );
}

export default Button;
