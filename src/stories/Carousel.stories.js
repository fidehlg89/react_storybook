import Carousel from "../components/Carousel";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  title: "Components/Carousel",
  component: Carousel,
  argTypes: {  },
};

const Template = (args) => <Carousel {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  title: "Carousel"
};