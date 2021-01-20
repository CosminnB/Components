import "./App.css";
import "./assets/output.css";
import { useRef, useState } from "react";
import { Button, SIZE, SHAPE, KIND } from "./Button";
import { Checkbox, STYLE_TYPE, LABEL_PLACEMENT } from "./Checkbox";
import { Input, SIZEI } from "./Input";
import { Radio } from "./Radio";
import { RadioGroup, ALIGN } from "./RadioGroup";
function App() {
  const [checked, setChecked] = useState(false);
  const inputRef = useRef(null);
  return (
    <div className="app bg-gray-50">
      <h2 className="text-xl m-6 underline">Button</h2>
      <Button
        size={SIZE.large}
        shape={SHAPE.pill}
        onClick={() => inputRef.current && inputRef.current.focus()}
        endEnhancer={() => <p>end</p>}
        checked={checked}
      >
        Click Me!
      </Button>
      <h2 className="text-xl m-6 underline">Checkbox</h2>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        labelPlacement={LABEL_PLACEMENT.bottom}
        isIndeterminate //de implementat isIndeterminate
        error
      >
        Check me out!
      </Checkbox>
      <h2 className="text-xl m-6 underline">Input</h2>
      <Input
        clearable
        autoFocus={true}
        placeholder="Im the INPUT"
        size={SIZEI.large}
        startEnhancer={() => <p>Start</p>}
        endEnhancer={() => <p>$</p>}
        onFocus={() => console.log("You just focused, WOW!!")}
        inputRef={inputRef}
      />
      {/* ClearOnEscape este automat cand este clearable, de facut cu false */}

      <h2 className="text-xl m-6 underline">Radio</h2>
      <RadioGroup name="group" align={ALIGN.vertical} error>
        <Radio value="2" description="This is first description">
          Hello1
        </Radio>
        <Radio value="2" description="This is the second description">
          Hello2
        </Radio>
        <Radio value="3" description="Short description">
          Hello3
        </Radio>
      </RadioGroup>
    </div>
  );
}

export default App;
