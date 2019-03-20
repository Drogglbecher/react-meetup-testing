import React from "react";
import {
  configure,
  getStorybook,
  setAddon,
  addDecorator
} from "@storybook/react";
import { withOptions } from "@storybook/addon-options";
import { withKnobs } from "@storybook/addon-knobs";
import { checkA11y } from "@storybook/addon-a11y";
import "storybook-chromatic";

addDecorator(withKnobs);
addDecorator(checkA11y);

const stories = require.context(
  "../src/",
  true,
  /^(?!.*(?:node_modules)).*\.stories\.tsx$/
);

const storyPath = _ => _.split("/");
const storyName = _ => _[_.length - 1];

const sortStories = (a, b) => {
  const storyPathForA = storyPath(a);
  const storyPathForB = storyPath(b);
  const storyNameForA = storyName(storyPathForA).toUpperCase();
  const storyNameForB = storyName(storyPathForB).toUpperCase();

  if (storyNameForA === storyNameForB) return 0;

  return storyNameForA < storyNameForB ? -1 : 1;
};

configure(() => {
  stories
    .keys()
    .sort(sortStories)
    .forEach(stories);
}, module);

withOptions({
  name: "react-meetup-testing",
  url: "https://github.com/Drogglbecher/react-meetup-testing.git",
  showSearchBox: false
});
