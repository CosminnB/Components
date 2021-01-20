import React from "react";

export function Radio({
  align,
  aria_label,
  aria_labelledby,
  autFocus,
  children,
  disabled,
  error,
  name,
  onBlur,
  onChange,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  overrides,
  required,
  value,
  description,
}) {
  let classesInput, classesLabel;
  if (disabled) {
    classesLabel = {
      theme: "cursor-not-allowed text-gray-600",
    };
    classesInput = {
      theme: "cursor-not-allowed border-gray-200 text-gray-400 ",
    };
  } else {
    classesLabel = {
      theme: "cursor-pointer text-black",
    };
    classesInput = {
      theme: error
        ? "cursor-pointer border-red-400 bg-red-200 text-red-500 focus:border-red-500"
        : "cursor-pointer border-gray-400 text-black focus:border-black",
    };
  }

  return (
    <div className="mt-4 ml-2 ">
      <input
        type="radio"
        value={value}
        id={value}
        name={name}
        disabled={disabled}
        className={`${Object.values(classesInput).join(
          " "
        )} form-radio h-5 w-5 border-2 transition duration-100 ease-in mr-3`}
      />
      <label
        for={value}
        className={`${Object.values(classesLabel).join(" ")}  `}
      >
        {children}
        <span className="text-sm flex ml-8">{description}</span>
      </label>
    </div>
  );
}
