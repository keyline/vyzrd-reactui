import React from "react";

function Input({ type = "text", value, onChange, error, placeholder }) {
  return (
        <div className="d-flex align-items-center formPassword justify-content-between">

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
          login_input
        "
      />

      {/* ERROR — UNDER INPUT */}
      {error && (
        <p className="form_error">
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
