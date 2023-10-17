import HelloMessage from "../components/HelloWorld";

export default {
  title: "Components/HelloMessage",
  component: HelloMessage
};

const Template = (args) => <HelloMessage {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  color: "orange"
};
