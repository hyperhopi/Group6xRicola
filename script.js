const textElement = document.getElementById('question');
const optionButtonsElement = document.getElementById('option-buttons');
const closeButton = document.getElementById('closeButton').addEventListener("click", showPopUp);
let naturePoint = 0;
let businessPoint = 0;
let peoplePoint = 0;
const main = document.querySelector('#main');
const qna = document.querySelector('#qna');

function startGame() {
    state = {};
    showTextNode(1);
}

//beging page

function begin() {
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(() => {
                main.style.display = "none";
            }, 450)
            qna.classList.remove("hidden");
        startGame();
    }, 450)
}

//Show or hide the popup message

function showPopUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

//Show or hide text and buttons

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement("div")
            button.innerHTML = option.text;
            button.classList.add("btn");
            button.addEventListener('click', () => selectOption(option));
            optionButtonsElement.appendChild(button);
        }
    })
}

function showMap() {

}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    let nextTextNodeId = option.nextText;

    if (option.typeOfPoint === "Nature") {
        naturePoint = naturePoint + option.numberOfPoints;
        console.log("You have " + naturePoint + " nature points");
    } else if (option.typeOfPoint === "Business") {
        businessPoint = businessPoint + option.numberOfPoints;
        console.log("You have " + businessPoint + " business points");

    } else if (option.typeOfPoint === "People") {
        peoplePoint = peoplePoint + option.numberOfPoints;
        console.log("this is my life i whana live" + option.numberOfPoints)
        console.log("You have " + peoplePoint + " people points");
    }

    if (nextTextNodeId <= 0) {
        // return startGame() //change to showMap later
        return showPopUp();
    }

    state = Object.assign(state, option.setNatureState)
    showTextNode(nextTextNodeId);
}


/* here is some map JS */

const hexses = document.querySelectorAll(".hexagons")

hexses.forEach((e) => {
    e.addEventListener("click", function() {
        let questionPage = document.querySelector(".hidden");
        questionPage.classList.remove('hidden');
    });
})