import MarkDownEditor from "../components/MarkDownEditor";

export default {
  title: "Components/MarkDownEditor",
  component: MarkDownEditor
};

const Template = (args) => <MarkDownEditor {...args} />;

export const Basic = Template.bind({});

Basic.args = {
};