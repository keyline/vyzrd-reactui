import React from "react";

function Input({ type = "text", value, onChange, error, placeholder }) {
  return (
        <div className="mb-6">

      {/* INPUT — NO UNDERLINE */}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="
          w-full
          bg-transparent
          outline-none
          text-sm
          pb-1
        "
      />

      {/* ERROR — UNDER INPUT */}
      {error && (
        <p className="text-xs text-gray-500 mt-1">
          {error}
        </p>
      )}

      {/* UNDERLINE — ALWAYS BELOW */}
      <div
        className={`
          border-b 
          ${error ? "border-red-500" : "border-gray-400"}
          mt-1
        `}
      ></div>
    </div>
  );
}

export default Input;
