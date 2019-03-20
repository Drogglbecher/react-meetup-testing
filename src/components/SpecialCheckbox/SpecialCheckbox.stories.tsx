import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Props, SpecialCheckbox } from "./SpecialCheckbox";
import { wInfo } from "../../../.storybook/utils";
import { text } from "@storybook/addon-knobs";

const props: Props = {
  isChecked: true,
  onChange: action("onChange"),
  text: "awesome label"
};

storiesOf("SpecialCheckbox", module)
  .add(
    "normal",
    wInfo(``)(() => (
      <SpecialCheckbox
        {...props}
        isChecked={false}
        text={text("Text", "Your text")}
      />
    ))
  )
  .add("prechecked", wInfo(``)(() => <SpecialCheckbox {...props} isChecked />));
