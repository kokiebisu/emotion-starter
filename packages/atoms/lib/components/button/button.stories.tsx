import { Button } from ".";
import { Story, Meta } from "@storybook/react";
import React from "react";

export default {
  title: "Button",
  component: Button,
} as Meta;

const TemplateStory: Story<{}> = (args) => <Button {...args} />;

export const Primary = TemplateStory.bind({});
Primary.args = {};
