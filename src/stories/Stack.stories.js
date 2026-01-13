import Stack from "../components/Stack";

export default {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 },
  },
};

export const Horizontal = {
  render: ({ numberOfChildren, ...args }) => (
    <Stack {...args}>
      {[...Array(numberOfChildren).keys()].map((n) => (
        <div
          key={n}
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {n + 1}
        </div>
      ))}
    </Stack>
  ),
  args: {
    direction: "row",
    spacing: 2,
    wrap: false,
    numberOfChildren: 4,
  }
};
