import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../app/components/ui/Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Click Here",
  },
};

export const Secondary: Story = {
  args: {
    secondary: true,
    children: "Click Here",
  },
};
