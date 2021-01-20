import React from "react";
import { LABEL_PLACEMENT } from "./Checkbox";
export const SIZEI = {
  mini: "p-1 text-xs",
  compact: "p-1 text-sm",
  default: "p-2 text-md",
  large: "p-3 text-lg",
};
export function Input({
  adjoined,
  aria_describedby,
  aria_label,
  aria_labelledby,
  autoComplete,
  autoFocus,
  clearOnEscape,
  clearable,
  disabled,
  endEnhancer,
  error,
  id,
  inputMode,
  inputRef,
  max,
  maxLength,
  min,
  name,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  overrides,
  pattern,
  placeholder,
  positive,
  required,
  size,
  startEnhancer,
  step,
  type,
  value,
}) {
  console.log(autoFocus);
  let classes;
  let classesEnhancers;
  if (disabled) {
    classes = {
      disabled:
        "cursor-not-allowed text-gray-300 bg-gray-100 border-2 border-gray-200",
      size: size ? size : SIZEI.default,
    };
    classesEnhancers = {
      disabled: classes.disabled,
    };
  } else {
    classes = {
      error:
        error &&
        "border-red-300 bg-red-100 focus:border-black focus:bg-gray-100 focus-within:border-black focus-within:bg-gray-100",
      positive:
        positive &&
        "border-green-300 bg-green-50 focus:bg-gray-100 focus:border-black focus-within:bg-gray-100 focus-within:border-black",
      general:
        "border-gray-300 focus:border-black focus-within:border-black  text-black",
      size: size ? size : SIZEI.default,
    };
    classesEnhancers = {
      error: classes.error,
      positive: classes.positive,
      general: classes.general,
    };
  }

  return startEnhancer || endEnhancer ? (
    <div
      className={`inline-flex border-2 p-1 m-6 ${Object.values(
        classesEnhancers
      ).join(" ")}`}
    >
      <div className={`flex items-center text-lg `}>
        {startEnhancer ? startEnhancer() : ""}
      </div>
      <input
        ref={inputRef}
        value={value}
        type={clearable ? "search" : type ? type : "text"}
        disabled={disabled ? disabled : ""}
        className={`${Object.values(classes).join(" ")} flex-1  form-input `}
        placeholder={placeholder}
        inputmode={inputMode}
        aria-label={aria_label}
        aria-labelledby={aria_labelledby}
        aria-describedby={aria_describedby}
        autocomplete={autoComplete}
        autofocus={autoFocus}
        pattern={pattern}
        id={id}
        name={name}
        min={min}
        max={max}
        step={step}
        maxlength={maxLength}
        required={required}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
        onFocus={onFocus}
      />
      <div className={`flex items-center text-lg `}>
        {endEnhancer ? endEnhancer() : ""}
      </div>
    </div>
  ) : (
    <input
      value={value}
      type={type ? type : clearable ? "search" : "text"}
      disabled={disabled ? disabled : ""}
      className={`${Object.values(classes).join(
        " "
      )} border-2 form-input mt-12`}
      placeholder={placeholder}
      inputmode={inputMode}
      aria-label={aria_label}
      aria-labelledby={aria_labelledby}
      aria-describedby={aria_describedby}
      autocomplete={autoComplete}
      autofocus={autoFocus}
      pattern={pattern}
      id={id}
      name={name}
      min={min}
      max={max}
      step={step}
      maxlength={maxLength}
      required={required}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      onKeyPress={onKeyPress}
      onKeyUp={onKeyUp}
      onFocus={onFocus}
    />
  );
}
