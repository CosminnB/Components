import React from "react";
import LoopIcon from "@material-ui/icons/Loop";
export const SIZE = {
  large: "text-lg p-3",
  compact: "text-sm p-2",
  mini: "text-xs p-1",
  default: "text-base p-3",
};
export const SHAPE = {
  pill: "rounded-full",
  circle: "rounded-full h-16 w-16",
  square: "h-16 w-16",
};
export const KIND = {
  primary: "bg-black hover:bg-gray-800 text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-black",
  tertiary: "bg-white hover:bg-gray-100 text-black",
  minimal: "bg-white hover:bg-gray-100 text-black",
  disabled: "bg-gray-100 text-gray-400 cursor-not-allowed",

  primarySelected: "bg-gray-600 text-white",
  secondarySelected: "bg-black text-white",
  tertiarySelected: "bg-gray-200 text-black",
  minimalSelected: "bg-gray-200 text-black",
};

export function Button({
  children,
  disabled,
  endEnhancer,
  startEnhancer,
  isLoading,
  isSelected,
  kind,
  onClick,
  overrides,
  shape,
  size,
}) {
  let classes;

  if (disabled) {
    classes = {
      size: size ? size : SIZE.default,
      shape,
      kind: KIND.disabled,
    };
  } else if (isSelected) {
    if (kind) {
      let selectedKind;
      switch (kind) {
        case KIND.secondary:
          selectedKind = KIND.secondarySelected;
          break;
        case KIND.teriary:
          selectedKind = KIND.tertiarySelected;
          break;
        case KIND.minimal:
          selectedKind = KIND.minimalSelected;
          break;
      }
      classes = {
        size: size ? size : SIZE.default,
        shape,
        kind: selectedKind,
      };
    } else {
      classes = {
        size: size ? size : SIZE.default,
        shape,
        kind: KIND.primarySelected,
      };
    }
  } else {
    classes = {
      size: size ? size : SIZE.default,
      shape,
      kind: kind ? kind : KIND.primary,
    };
  }

  return (
    <button
      onClick={disabled ? "" : onClick}
      className={`${Object.values(classes).join(
        " "
      )} transition-all ease-in duration-200 font-bold m-6 focus:outline-none flex items-center gap-x-2`}
    >
      {startEnhancer && !isLoading ? startEnhancer() : ""}
      {isLoading ? <LoopIcon className="animate-spin  w-full h-6" /> : children}
      {endEnhancer && !isLoading ? endEnhancer() : ""}
    </button>
  );
}
