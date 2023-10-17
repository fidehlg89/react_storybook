import SidebarExample from "../components/Sidebar";

export default {
  title: "Components/Sidebar",
  component: SidebarExample,
};

const Template = (args) => <SidebarExample {...args} />

export const Basic = Template.bind({});

Basic.args = {

};
