const textElement = document.getElementById("question");
const optionButtonsElement = document.getElementById("option-buttons");
const closeButton = document
    .getElementById("closeButton")
    .addEventListener("click", continueGame);
let naturePoint = 0;
let businessPoint = 0;
let peoplePoint = 0;
let currentNaturePoint = 0;
let currentBusinessPoint = 0;
let currentPeoplePoint = 0;
let state = {};
const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const sideMenu = document.querySelector("#side-menu");
const wrapper = document.querySelector(".wrapper");
const screenMessage = document.getElementById("screen-message");
const nBoxPoints = document.getElementById("n-box");
const pBoxPoints = document.getElementById("p-box");
const bBoxPoints = document.getElementById("b-box");
const totalPoints = document.querySelector(".totalPoints");
const windowWidth = window.screen.width;

document
    .querySelectorAll(".hex-grid__item")
    /* _click event is fired_
     Browser: hey JS dudes,
      this fella just <clicked> <.hex-grid__content>,
      which is inside of <.hex-grid__item> that you had that event listener thingy

     JS: Ok bruh, lemme fire that function <begin> and imma feed it an object with that data

      (this object is of type Event) object: {
        target: <.hex-grid__content>: {
          parentElement: <.hex-grid__item>
        }
        , ....
      } */
    .forEach((item) => item.addEventListener("click", begin));

function startGame(gridItem) {
  state = {};
  /* below line: looks for the dataset which is data-id, parses the string number
  into a real number, then "assigns" the relevant id nr to the array question nrs */
  /* Li'l gridItem has a dataset attribute, which you can also call data-* attribute
    Li'l gridItem, when it wants to reffer to it's data-ID, it calls it, in the JS town,
    as dataset.<ID>.
    Thing is, that is a string, which is not what showTextNode expects as a parameter, cuz
    it will use that parameter to find an item on textNodes by the item's id, which is a nubmer.
    In order to fix that, we need to <parseInt> that string MOFO, so poor showTextNode don't
    loose it's shit.*/
  showTextNode(parseInt(gridItem.dataset.id));
  
  currentNaturePoint = 0;
  currentBusinessPoint = 0;
  currentPeoplePoint = 0;
}

//begin page

function begin(event) {
    main.style.WebkitAnimation = "fadeOut 0.6s";
    main.style.animation = "fadeOut 0.6s";
    setTimeout(() => {
        main.classList.add("hidden");
        sideMenu.classList.add("hidden");
        wrapper.style.backgroundImage = "none";
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        qna.classList.remove("hidden");
        startGame(event.target.parentElement);
    }, 450);
}

//Show or hide the popup message
function togglePopUp() { 
  totalPoints.innerHTML = "";
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  let headerText = 'You have earned';

  const pointsTemplate = document.createElement("div");
  pointsTemplate.classList.add("points-box");
  pointsTemplate.innerHTML = `
  <div class="popup-circle">
    <span class="letter">N</span>
      <span class="type-text">Nature</span>
  </div>
  <p class="points-info">Zero pesticides</p>`;
  
  if (currentBusinessPoint !== 0) {
    headerText = `${headerText} ${currentBusinessPoint} Business Points`;
    pointsTemplate.querySelector(".letter").innerText = "B";
    pointsTemplate.querySelector(".type-text").innerText = "Business";
    pointsTemplate.querySelector(".points-info").innerText =
      "Business oriented result";

    const newBoozines = pointsTemplate.cloneNode();
    newBoozines.innerHTML = pointsTemplate.innerHTML;

    totalPoints.appendChild(newBoozines);
  }

  if (currentNaturePoint !== 0) {
    headerText = `${headerText} ${currentNaturePoint} Nature Points`;
    pointsTemplate.querySelector(".letter").innerText = "N";
    pointsTemplate.querySelector(".type-text").innerText = "Nature";
    pointsTemplate.querySelector(".points-info").innerText =
      "Nature oriented result";

    const newNatur = pointsTemplate.cloneNode();
    newNatur.innerHTML = pointsTemplate.innerHTML;

    totalPoints.appendChild(newNatur);
  }

  if (currentPeoplePoint !== 0) {
    headerText = `${headerText} ${currentPeoplePoint} People Points`;
    pointsTemplate.querySelector(".letter").innerText = "P";
    pointsTemplate.querySelector(".type-text").innerText = "People";
    pointsTemplate.querySelector(".points-info").innerText =
      "People oriented result";

    const newPpl = pointsTemplate.cloneNode();
    newPpl.innerHTML = pointsTemplate.innerHTML;

    totalPoints.appendChild(newPpl);
  }

  document.querySelector('.points-earned').innerText = headerText
}

function continueGame() {
    // add function that returns to map screen
    qna.style.WebkitAnimation = "fadeOut 0.6s";
    qna.style.animation = "fadeOut 0.6s";
    setTimeout(() => {
        qna.classList.add("hidden");
        main.style.WebkitAnimation = "fadeIn 1s";
        main.style.animation = "fadeIn 1s";
        main.classList.remove("hidden");
        sideMenu.classList.remove("hidden");
        wrapper.style.backgroundImage =
            "url('Grindelwald_IMGP9734_35_Kombi_RGB.jpg')";
    }, 450);
    togglePopUp();
}

//Show or hide text and buttons

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach((option) => {
        if (showOption(option)) {
            const button = document.createElement("div");
            button.innerHTML = option.text;
            button.classList.add("btn");
            button.addEventListener("click", () => selectOption(option));
            optionButtonsElement.appendChild(button);
        }
    });
}

function showMap() {}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  let nextTextNodeId = option.nextText;

  if (option.typeOfPoint === "Nature") {
    naturePoint = naturePoint + option.numberOfPoints;
    
    currentNaturePoint = currentNaturePoint + option.numberOfPoints;
    nBoxPoints.innerHTML = naturePoint;
    console.log("You have " + naturePoint + " nature points");

  } else if (option.typeOfPoint === "Business") {
    businessPoint = businessPoint + option.numberOfPoints;

    currentBusinessPoint = currentBusinessPoint + option.numberOfPoints;
    bBoxPoints.innerHTML = businessPoint;
    console.log("You have " + businessPoint + " business points");

  } else if (option.typeOfPoint === "People") {
    peoplePoint = peoplePoint + option.numberOfPoints;
    
    currentPeoplePoint = currentPeoplePoint + option.numberOfPoints;
    pBoxPoints.innerHTML = peoplePoint;
    console.log("You have " + peoplePoint + " people points");
  }

  if (nextTextNodeId <= 0) {
    return togglePopUp();
  }

  state = Object.assign(state, option.setNatureState);
  showTextNode(nextTextNodeId);
}

/* here is some map JS */

// const hexses = document.querySelectorAll(".hexagons");

// hexses.forEach((e) => {
//     e.addEventListener("click", function() {
//         let questionPage = document.querySelector(".hidden");
//         questionPage.classList.remove("hidden");
//     });
// });

if (windowWidth < 1440) {
    console.log("heyo bigger screen pls")
    container.classList.add("hidden");
    screenMessage.classList.remove("hidden");
};