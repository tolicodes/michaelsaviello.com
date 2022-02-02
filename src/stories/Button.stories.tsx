import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components/Button/Button";

export default {
  title: "Test/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Subscribe'
};

export const CustomColor = Template.bind({});

CustomColor.args = {
  children: 'Subscribe',
  color: 'green',
  labelColor: 'black',
};
