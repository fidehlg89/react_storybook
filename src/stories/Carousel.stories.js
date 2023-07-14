import CarouselContainer from "../components/Carousel";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  title: "Components/Carousel",
  component: CarouselContainer,
  argTypes: {},
};

const Template = (args) => <CarouselContainer {...args} />;

export const Basic = Template.bind({});

Basic.args = {
};