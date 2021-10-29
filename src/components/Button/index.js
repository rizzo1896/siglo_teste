import React from "react";

function Button({ children, color }) {
  return (
    <button
      style={{ backgroundColor: `${color}` }}
      className="py-1 px-2 rounded text-white"
    >
      {children}
    </button>
  );
}

export default Button;
