import Clock from "../components/Clock";

export default {
  title: "Components/Clock",
  component: Clock,
};

const Template = (args) => <Clock {...args} />;

export const single = Template.bind({});

single.args = {

};