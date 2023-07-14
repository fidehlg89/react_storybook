import { Memorize } from "../components/Memorize";

export default {
  title: "Components/Memorize",
  component: Memorize
};

const Template = (args) => <Memorize {...args} />;

export const Basic = Template.bind({});

Basic.args = {
};