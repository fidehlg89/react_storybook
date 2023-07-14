import Game from "../components/TicTacToe/Game";

export default {
    title: "Components/TicTacToe",
    component: Game
}

const Template = (args)=> <Game {...args}/>

export const TicTacToe = Template.bind({});

TicTacToe.args = {
};