import Sidebar from "../components/Sidebar";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
};

const Template = (args) => <Sidebar {...args} />

export const Basic = Template.bind({});

Basic.args = {

};
