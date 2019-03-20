import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Props, SpecialCheckbox } from "./SpecialCheckbox";
import { wInfo } from "../../../.storybook/utils";

const props: Props = {
  isChecked: true,
  onChange: action("onChange"),
  text: "awesome label"
};

storiesOf("SpecialCheckbox", module)
  .add(
    "normal",
    wInfo(``)(() => <SpecialCheckbox {...props} isChecked={false} />)
  )
  .add("prechecked", wInfo(``)(() => <SpecialCheckbox {...props} isChecked />));
