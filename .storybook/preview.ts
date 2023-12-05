import type { Preview } from "@storybook/react";
import "../src/app/globals.css"; // replace with the name of your tailwind css file

import { themes } from "@storybook/theming";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;
