import Accordion from "../components/Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {},
};

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});

Default.args = {};
