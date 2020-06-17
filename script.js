const gameBoard = {
    array: [' ',' ',' ',' ',' ',' ',' ',' ',' '],

};
const Player = () => {};

const displayController = () => {

}

const render = () => {

    const container = document.querySelector('#container');
    const gameBoardDiv = document.querySelector('#gameboard');
    const template = gameBoard.array;
    const elements = [];

    template.forEach(content => {
        const wrapper = document.createElement('item');
        wrapper.classList.add('item');
        gameBoardDiv.appendChild(wrapper);
        wrapper.innerHTML = content;
        elements.push(wrapper);
    })

    console.log(elements)

    elements.forEach((element, i) => {
        element.addEventListener('click', () => {
            element.innerHTML = Math.floor(Math.random() *10)
        })
    })

    
}

render();
/*

*/
