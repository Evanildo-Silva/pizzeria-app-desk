import { Meta, StoryObj } from "@storybook/react";
import { selectMock } from "../../__test__/mocks/selectMock";
import { Select } from "../app/components/ui/Select";

const meta = {
  title: "Example/Select",
  component: Select,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: selectMock.map((item) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    )),
  },
};
