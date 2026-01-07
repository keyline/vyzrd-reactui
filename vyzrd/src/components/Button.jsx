import React from "react";

function Button({ text, onClick,disabled}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        px-6 py-2 rounded font-semibold shadow
        ${disabled
          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
          : "bg-yellow-500 hover:bg-yellow-600 text-white cursor-pointer"}
      `}
    >
      {text}
    </button>
  );
}

export default Button;
