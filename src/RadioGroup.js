import React from "react";
import { Radio } from "./Radio";
export const ALIGN = {
  horizontal: "flex-row",
  vertical: "flex-col",
};
export function RadioGroup({ name, children, align, disabled, error, value }) {
  return (
    <div className={`flex m-6  ${align ? align : ALIGN.vertical}`}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          name: name,
          error: error,
          disabled: disabled,
        });
      })}
    </div>
  );
}
