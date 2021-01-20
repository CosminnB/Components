import React, { useEffect, useRef } from "react";
export const STYLE_TYPE = {
  default: "",
  toggle: "rounded-md",
  toggle_round: "rounded-full",
};
export const LABEL_PLACEMENT = {
  left: "flex-row-reverse",
  right: "flex-row",
  top: "flex-col-reverse",
  bottom: "flex-col",
};
export function Checkbox({
  ariaLabel,
  autoFocus,
  checked,
  checkmarkType,
  children,
  disabled,
  error,
  inputRef,
  isIndeterminate,
  labelPlacement,
  name,
  onBlur,
  onChange,
  onFocus,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  overrides,
  required,
  title,
}) {
  let classesCheckbox, classesLabel, classesInput;
  if (disabled) {
    classesInput = {
      type: checkmarkType ? checkmarkType : STYLE_TYPE.default,
      cursor: "cursor-not-allowed",
    };
    classesLabel = {
      type: checkmarkType ? checkmarkType : STYLE_TYPE.default,
      cursor: "cursor-not-allowed",
    };
    classesCheckbox = {
      theme: "cursor-not-allowed text-gray-300",
    };
  } else {
    classesInput = {
      type: checkmarkType ? checkmarkType : STYLE_TYPE.default,
      cursor: disabled ? "cursor-not-allowed" : "cursor-pointer",
      error: error ? "toggle-checkbox-error" : "toggle-checkbox",
    };

    classesLabel = {
      type: checkmarkType ? checkmarkType : STYLE_TYPE.default,
      cursor: disabled ? "cursor-not-allowed" : "cursor-pointer",
      error: error ? "toggle-label-error " : "toggle-label",
    };

    classesCheckbox = {
      error: error
        ? "text-red-500 border-red-300 bg-red-100"
        : "text-black border-gray-300 bg-gray-200",
    };
  }

  return (
    <div className="m-6">
      {checkmarkType ? (
        <div className={`${labelPlacement} flex items-center w-20 h-20`}>
          {/*flex-row pt text in dreapta, flex-row-reverse pt text in stanga, flex-col pt text bottom, flex-col-reverse pt text top */}
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className={`${Object.values(classesInput).join(
                " "
              )} outline-none focus:shadow-none absolute block w-6 h-6 flex bg-white items-center border-4 appearance-none cursor-pointer`}
              disabled={disabled}
              onChange={onChange}
            />
            <label
              for="toggle"
              className={`${Object.values(classesLabel).join(
                " "
              )} block overflow-hidden h-6 bg-gray-300 cursor-pointer `}
            ></label>
          </div>
          <label for="toggle" class="text-xs text-black">
            {children}
          </label>
        </div>
      ) : (
        <label
          className={`outline-none flex ${labelPlacement} items-center w-40 h-20
        `}
        >
          <input
            type="checkbox"
            className={`${Object.values(classesCheckbox).join(
              " "
            )} form-checkbox border-2 transition-all h-6 w-6 m-5 `}
            disabled={disabled}
            id="myCheckbox"
          />
          <span className="ml-2">{children}</span>
        </label>
      )}
    </div>
  );
}
