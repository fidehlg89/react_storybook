import HelmetApp from "../components/Helmet";

export default {
  title: "Components/Helmet",
  component: HelmetApp,
};

const Template = (args) => <HelmetApp {...args} />;

export const Basic = Template.bind({});

Basic.args = {};
