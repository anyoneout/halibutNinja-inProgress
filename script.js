const textElement = document.getElementById('text')
const optionsButtonsElement = document.getElementById('option-buttons')

let state = {}


function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
}

function selectOption(option) {

}

const textNodes = [
    {
        id: 1,
        text: 'You wake up on Hendrix street with a new day before you.', 
        options: [
            {
                text: 'Go to the pool',
                nextText: 2
            },
            {
                text: 'Go to the arcade',
                nextText: 2
            },  
            {
                text: 'Go on a savage hunt',
                nextText: 3
            },  
        ]
    }, 
    {
        id: 2
    }
]

startGame() 