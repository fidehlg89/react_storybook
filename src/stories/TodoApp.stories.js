import TodoApp from "../components/TodoApp";

export default {
    title: "Components/TodoApp",
    component: TodoApp
}

const Template = (args) => <TodoApp {...args} />

export const Basic = Template.bind({});

Basic.args = {

};

