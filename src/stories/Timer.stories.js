import Timer from "../components/Timer";

export default {
    title: "Components/Timer",
    component: Timer
}

const Template = (args)=> <Timer {...args}/>

export const Basic = Template.bind({});

Basic.args = {
};