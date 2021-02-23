const textElement = document.getElementById('question');
const optionButtonsElement = document.getElementById('option-buttons');

let natureState = {}
    // let peopleState = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement("button")
            button.innerText = option.text
            button.classList.add("btn")
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return true
}

function selectOption(option) {

}

const textNodes = [{
        id: 1,
        text: "Welcome to the Ricola Factory!",
        options: [{
                text: "Nature option",
                setNatureState: { naturePoint: true },
                nextText: 2
            },
            {
                text: "People option",
                // setPeopleState: {}
                nextText: 2
            },
            {
                text: "Business option",
                nextText: 2
            },
            {
                text: "X option",
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: "Welcome to the Ricola Factory VERSION 2!",
        options: [{
                text: "Nature option",
                setNatureState: { naturePoint: true },
                nextText: 3
            },
            {
                text: "People option",
                // setPeopleState: {}
                nextText: 3
            },
            {
                text: "Business option",
                nextText: 3
            },
            {
                text: "X option",
                nextText: 3
            }
        ]
    },
]

startGame();