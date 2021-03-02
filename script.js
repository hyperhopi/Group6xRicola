const textElement = document.getElementById('question');
const optionButtonsElement = document.getElementById('option-buttons');
const closeButton = document.getElementById('closeButton').addEventListener("click",showPopUp);
let naturePoint = 0;
let businessPoint = 0;
let peoplePoint = 0;


function startGame() {
    state = {};
    showTextNode(1);
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
            const button = document.createElement("button")
            button.innerText = option.text;
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

    if (option.typeOfPoint==="nature"){
        naturePoint = naturePoint + option.numberOfPoints;
        console.log("You have "+naturePoint+" nature points");
    }

    else if (option.typeOfPoint==="business") {
        businessPoint = businessPoint + option.numberOfPoints;
        console.log("You have "+businessPoint+" business points");

    } else if (option.typeOfPoint==="people") {
        peoplePoint = peoplePoint + option.numberOfPoints;
        console.log("this is my life i whana live" + option.numberOfPoints)
        console.log("You have "+peoplePoint+" people points");
    } 

    if (nextTextNodeId <= 0) {
       // return startGame() //change to showMap later
      return showPopUp();
    }

    state = Object.assign(state, option.setNatureState)
    showTextNode(nextTextNodeId);
}


//Where all the content in the game is stored
const textNodes = [{
        id: 1,
        text: "Welcome to the Ricola Factory!",
        options: [{
                text: "Nature option",
                typeOfPoint: "nature",
                numberOfPoints: 1,
                nextText: 2
            },
            {
                text: "People option",
                typeOfPoint: "people",
                numberOfPoints: 3,
                nextText: 2
            },
            {
                text: "Business option",
                typeOfPoint: "business",
                numberOfPoints: 1,
                nextText: 2
            },
            {
                text: "X option",
                typeOfPoint: "",
                numberOfPoints: 1,
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: "Welcome to the Ricola Factory VERSION 2!",
        options: [{
                text: "Nature again",
                typeOfPoint: "nature",
                numberOfPoints: 3,
                nextText: -1 //just to test the popup
            },
            {
                text: "People option",
                // setPeopleState: {}
                typeOfPoint: "people",
                numberOfPoints: 2,
                nextText: 3
                
            },
            {
                text: "Business option",
                typeOfPoint: "business",
                numberOfPoints: 1,
                nextText: 3
            },
            {
                text: "X option",
                typeOfPoint: "",
                numberOfPoints: 1,
                nextText: 3
            }
        ]
    },
]

/* here is some map JS */

const hexses = document.querySelectorAll(".hexagons")

hexses.forEach((e) => {
    e.addEventListener("click", function (){
        let questionPage = document.querySelector(".hidden");
        questionPage.classList.remove('hidden');
    });
})

startGame();