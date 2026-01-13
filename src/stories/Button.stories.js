import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } }
};

export const Red = {
  args: {
    backgroundColor: "red",
    label: "Press me",
    size: "md"
  }
};
