import React from "react";

function Button({ text, onClick,disabled}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        ${disabled
          ? "bg-gray-300 text-gray-600 cursor-not-allowed disabled_btn"
          : "bg-yellow-500 hover:bg-yellow-600 text-white cursor-pointer login_btn"}
      `}
    >
      {text}
    </button>
  );
}

export default Button;
