import InputLabel from "../components/InputLabel";

export default {
  title: "Components/InputLabel",
  component: InputLabel
};

const Template = (args) => <InputLabel {...args} />;

export const Default = Template.bind({});

Default.args = {
  value: "Hola Mundo"
};
