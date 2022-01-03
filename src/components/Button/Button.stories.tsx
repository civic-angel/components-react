import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      table: {
        category: "Props",
      },
      control: {
        type: "select",
        options: ["default", "primary", "success", "danger"]
      }
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default Button",
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  type: "primary",
};

export const Success = Template.bind({});
Success.args = {
  label: "Success Button",
  type: "success",
};

export const Danger = Template.bind({});
Danger.args = {
  label: "Danger Button",
  type: "danger",
};
