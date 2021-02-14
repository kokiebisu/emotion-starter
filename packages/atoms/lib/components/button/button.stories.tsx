import React from "react";
import { Button } from ".";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as Meta;

const TemplateStory: Story<{ onClick: any }> = (args) => <Button {...args} />;

export const Primary = TemplateStory.bind({});
Primary.args = {};
