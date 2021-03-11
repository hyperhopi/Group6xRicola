const textNodes = [
  {
    id: 1,
    text:
      "Question: Ricola’s trusted honey supplier has taken a even more sustainable path, which has significantly increased their prices. What would you do ?",
    options: [
      {
        text:
          "<span class='bold'>Option A</span><br>This option favors Nature, so you may get Nature points.",
        typeOfPoint: "Nature",
        numberOfPoints: 2,
        nextText: -1,
      },
      {
        text:
          "<span class='bold'>Option B</span><br>This option favors Business, so you may get Business points.",
        typeOfPoint: "Business",
        numberOfPoints: 1,
        nextText: -1,
      },
    ],
  },
  {
    id: 2,
    text:
      "One of your herb farmers is calling you in distress. Half of her sage plants are dying from a disease she has never seen before. You need sage next month. What would you do?",
    options: [
      {
        text:
          "<span class='bold'>Option A</span><br>Ask her to try a solution that is 100% natural, but has questionable results.",
        typeOfPoint: "Business",
        numberOfPoints: 2,
        nextText: 3,
      },
      {
        text: "<span class='bold'>Option B</span><br>Find a new supplier.",
        typeOfPoint: "People",
        numberOfPoints: 1,
        nextText: 3,
      },
    ],
  },
  {
    id: 3,
    text:
      "The natural solution was ineffective. The herbs are dying even faster.",
    options: [
      {
        text:
          "<span class='bold'>Option A</span><br>Ask her to kill the defected plants and provide a compensation for her losses.",
        typeOfPoint: "People",
        numberOfPoints: 2,
        nextText: -1,
      },
      {
        text:
          "<span class='bold'>Option B</span><br> Use an effective pesticide.",
        typeOfPoint: "Business",
        numberOfPoints: 1,
        nextText: -1,
      },
    ],
  },
  {
    id: 4,
    text:
      "There was a miscalculation and an extra amount of herbs will be needed before Winter arrives. You need a new supplier. Who do you choose?",
    options: [
      {
        text:
          "<span class='bold'>Option A</span><br>An organic farm with the BioSuisse certification that can try to attend the demand, but it's not guaranteed.",
        typeOfPoint: "People",
        numberOfPoints: 2,
        nextText: 5,
      },
      {
        text:
          "<span class='bold'>Option B</span><br>A farm that is outside of Switzerland, but can guarantee a shipment in a month.",
        typeOfPoint: "Nature",
        numberOfPoints: 1,
        nextText: 5,
      },
    ],
  },
  {
    id: 5,
    text: "You need to find a supplier of basil for a new product line.",
    options: [
      {
        text:
          "<span class='bold'>Option A</span><br>Use local family farm that you have collaborated with before, but stopped because they lost their eco certifications.",
        typeOfPoint: "Nature",
        numberOfPoints: 2,
        nextText: 6,
      },
      {
        text:
          "<span class='bold'>Option B</span><br>Use Swiss supplier that uses vertical farming, claiming that is more sustainable.",
        typeOfPoint: "Business",
        numberOfPoints: 1,
        nextText: 6,
      },
    ],
  },
  {
    id: 6,
    text: "A mysterious disease is taking over some herbs! What would you do?",
    options: [
      {
        text:
          "<span class='bold'>Option A</span><br>The researchers at Ricola are trying to develop a natural solution, so it may take some time.",
        typeOfPoint: "Business",
        numberOfPoints: 2,
        nextText: -1,
      },
      {
        text:
          "<span class='bold'>Option B</span><br>The Herb Group has successfully tested one pesticide works against that disease.",
        typeOfPoint: "People",
        numberOfPoints: 1,
        nextText: -1,
      },
    ],
  },
  {
    id: 7,
    text: "Question number7",
    options: [
      {
        text: "This options favors Nature, so you may get Nature points.",
        typeOfPoint: "Nature",
        numberOfPoints: 3,
        nextText: 8,
      },
      {
        text: "This options favors People, so you may get People points.",
        typeOfPoint: "People",
        numberOfPoints: 1,
        nextText: 8,
      },
    ],
  },
  {
    id: 8,
    text: "Question number8",
    options: [
      {
        text: "This options favors Business, so you may get Business points.",
        typeOfPoint: "Business",
        numberOfPoints: 3,
        nextText: 9,
      },
      {
        text: "This options favors Nature, so you may get Nature points.",
        typeOfPoint: "Nature",
        numberOfPoints: 1,
        nextText: 9,
      },
    ],
  },
  {
    id: 9,
    text: "Question number9",
    options: [
      {
        text: "This options favors Another, so you may get Another points.",
        typeOfPoint: "Another",
        numberOfPoints: 3,
        nextText: 10,
      },
      {
        text: "This options favors People, so you may get People points.",
        typeOfPoint: "People",
        numberOfPoints: 1,
        nextText: 10,
      },
    ],
  },
  {
    id: 10,
    text: "Question number10",
    options: [
      {
        text: "This options favors People, so you may get People points.",
        typeOfPoint: "People",
        numberOfPoints: 3,
        nextText: 11,
      },
      {
        text: "This options favors SomeThn, so you may get SomeThn points.",
        typeOfPoint: "SomeThn",
        numberOfPoints: 1,
        nextText: 11,
      },
    ],
  },
  {
    id: 11,
    text: "Question number11",
    options: [
      {
        text: "This options favors People, so you may get People points.",
        typeOfPoint: "People",
        numberOfPoints: 2,
        nextText: 12,
      },
      {
        text: "This options favors Business, so you may get Business points.",
        typeOfPoint: "Business",
        numberOfPoints: 1,
        nextText: 12,
      },
    ],
  },
  {
    id: 12,
    text: "Question number12",
    options: [
      {
        text: "This options favors Business, so you may get Business points.",
        typeOfPoint: "Business",
        numberOfPoints: 2,
        nextText: 13,
      },
      {
        text: "This options favors SomeThn, so you may get SomeThn points.",
        typeOfPoint: "SomeThn",
        numberOfPoints: 1,
        nextText: 13,
      },
    ],
  },
  {
    id: 13,
    text: "Question number13",
    options: [
      {
        text: "This options favors Another, so you may get Another points.",
        typeOfPoint: "Another",
        numberOfPoints: 3,
        nextText: 14,
      },
      {
        text: "This options favors Business, so you may get Business points.",
        typeOfPoint: "Business",
        numberOfPoints: 1,
        nextText: 14,
      },
    ],
  },
  {
    id: 14,
    text: "Question number14",
    options: [
      {
        text: "This options favors Nature, so you may get Nature points.",
        typeOfPoint: "Nature",
        numberOfPoints: 3,
        nextText: 15,
      },
      {
        text: "This options favors Business, so you may get Business points.",
        typeOfPoint: "Business",
        numberOfPoints: 1,
        nextText: 15,
      },
    ],
  },
  {
    id: 15,
    text: "Question number15",
    options: [
      {
        text: "This options favors Nature, so you may get Nature points.",
        typeOfPoint: "Nature",
        numberOfPoints: 2,
        nextText: 16,
      },
      {
        text: "This options favors SomeThn, so you may get SomeThn points.",
        typeOfPoint: "SomeThn",
        numberOfPoints: 1,
        nextText: 16,
      },
    ],
  },
  {
    id: 16,
    text: "Question number16",
    options: [
      {
        text: "This options favors Business, so you may get Business points.",
        typeOfPoint: "Business",
        numberOfPoints: 2,
        nextText: 17,
      },
      {
        text: "This options favors Nature, so you may get Nature points.",
        typeOfPoint: "Nature",
        numberOfPoints: 1,
        nextText: 17,
      },
    ],
  },
  {
    id: 17,
    text: "Question number17",
    options: [
      {
        text: "This options favors Another, so you may get Another points.",
        typeOfPoint: "Another",
        numberOfPoints: 2,
        nextText: 18,
      },
      {
        text: "This options favors People, so you may get People points.",
        typeOfPoint: "People",
        numberOfPoints: 1,
        nextText: 18,
      },
    ],
  },
  {
    id: 18,
    text: "Question number18",
    options: [
      {
        text: "This options favors Business, so you may get Business points.",
        typeOfPoint: "Business",
        numberOfPoints: 2,
        nextText: 19,
      },
      {
        text: "This options favors SomeThn, so you may get SomeThn points.",
        typeOfPoint: "SomeThn",
        numberOfPoints: 1,
        nextText: 19,
      },
    ],
  },
  {
    id: 19,
    text: "Question number19",
    options: [
      {
        text: "This options favors Another, so you may get Another points.",
        typeOfPoint: "Another",
        numberOfPoints: 2,
        nextText: 20,
      },
      {
        text: "This options favors Nature, so you may get Nature points.",
        typeOfPoint: "Nature",
        numberOfPoints: 1,
        nextText: 20,
      },
    ],
  },
  {
    id: 20,
    text: "Question number20",
    options: [
      {
        text: "This options favors Nature, so you may get Nature points.",
        typeOfPoint: "Nature",
        numberOfPoints: 2,
        nextText: 21,
      },
      {
        text: "This options favors Business, so you may get Business points.",
        typeOfPoint: "Business",
        numberOfPoints: 1,
        nextText: 21,
      },
    ],
  },
  {
    id: 21,
    text: "Question number21",
    options: [
      {
        text: "This options favors Another, so you may get Another points.",
        typeOfPoint: "Another",
        numberOfPoints: 2,
        nextText: 22,
      },
      {
        text: "This options favors People, so you may get People points.",
        typeOfPoint: "People",
        numberOfPoints: 1,
        nextText: 22,
      },
    ],
  },
  {
    id: 22,
    text: "Question number22",
    options: [
      {
        text: "This options favors People, so you may get People points.",
        typeOfPoint: "People",
        numberOfPoints: 2,
        nextText: 23,
      },
      {
        text: "This options favors Nature, so you may get Nature points.",
        typeOfPoint: "Nature",
        numberOfPoints: 1,
        nextText: 23,
      },
    ],
  },
  {
    id: 23,
    text: "Question number23",
    options: [
      {
        text: "This options favors Nature, so you may get Nature points.",
        typeOfPoint: "Nature",
        numberOfPoints: 2,
        nextText: 24,
      },
      {
        text: "This options favors SomeThn, so you may get SomeThn points.",
        typeOfPoint: "SomeThn",
        numberOfPoints: 1,
        nextText: 24,
      },
    ],
  },
  {
    id: 24,
    text: "Question number24",
    options: [
      {
        text: "This options favors Business, so you may get Business points.",
        typeOfPoint: "Business",
        numberOfPoints: 2,
        nextText: 25,
      },
      {
        text: "This options favors SomeThn, so you may get SomeThn points.",
        typeOfPoint: "SomeThn",
        numberOfPoints: 1,
        nextText: 25,
      },
    ],
  },
  {
    id: 25,
    text: "Question number25",
    options: [
      {
        text: "This options favors Another, so you may get Another points.",
        typeOfPoint: "Another",
        numberOfPoints: 2,
        nextText: 26,
      },
      {
        text: "This options favors Business, so you may get Business points.",
        typeOfPoint: "Business",
        numberOfPoints: 1,
        nextText: 26,
      },
    ],
  },
  {
    id: 26,
    text: "Question number26",
    options: [
      {
        text: "This options favors People, so you may get People points.",
        typeOfPoint: "People",
        numberOfPoints: 2,
        nextText: 27,
      },
      {
        text: "This options favors SomeThn, so you may get SomeThn points.",
        typeOfPoint: "SomeThn",
        numberOfPoints: 1,
        nextText: 27,
      },
    ],
  },
  {
    id: 27,
    text: "Question number27",
    options: [
      {
        text: "This options favors Another, so you may get Another points.",
        typeOfPoint: "Another",
        numberOfPoints: 2,
        nextText: 28,
      },
      {
        text: "This options favors People, so you may get People points.",
        typeOfPoint: "People",
        numberOfPoints: 1,
        nextText: 28,
      },
    ],
  },
  {
    id: 28,
    text: "Question number28",
    options: [
      {
        text: "This options favors Nature, so you may get Nature points.",
        typeOfPoint: "Nature",
        numberOfPoints: 2,
        nextText: 29,
      },
      {
        text: "This options favors SomeThn, so you may get SomeThn points.",
        typeOfPoint: "SomeThn",
        numberOfPoints: 1,
        nextText: 29,
      },
    ],
  },
  {
    id: 29,
    text: "Question number29",
    options: [
      {
        text: "This options favors Business, so you may get Business points.",
        typeOfPoint: "Business",
        numberOfPoints: 2,
        nextText: 30,
      },
      {
        text: "This options favors Nature, so you may get Nature points.",
        typeOfPoint: "Nature",
        numberOfPoints: 1,
        nextText: 30,
      },
    ],
  },
  {
    id: 30,
    text: "Question number30",
    options: [
      {
        text: "This options favors People, so you may get People points.",
        typeOfPoint: "People",
        numberOfPoints: 2,
        nextText: 31,
      },
      {
        text: "This options favors SomeThn, so you may get SomeThn points.",
        typeOfPoint: "SomeThn",
        numberOfPoints: 1,
        nextText: 31,
      },
    ],
  },
  {
    id: 31,
    text: "Question number31",
    options: [
      {
        text: "This options favors Business, so you may get Business points.",
        typeOfPoint: "Business",
        numberOfPoints: 2,
        nextText: 32,
      },
      {
        text: "This options favors Nature, so you may get Nature points.",
        typeOfPoint: "Nature",
        numberOfPoints: 1,
        nextText: 32,
      },
    ],
  },
  {
    id: 32,
    text: "Question number32",
    options: [
      {
        text: "This options favors Nature, so you may get Nature points.",
        typeOfPoint: "Nature",
        numberOfPoints: 2,
        nextText: 33,
      },
      {
        text: "This options favors SomeThn, so you may get SomeThn points.",
        typeOfPoint: "SomeThn",
        numberOfPoints: 1,
        nextText: 33,
      },
    ],
  },
  {
    id: 33,
    text: "Question number33",
    options: [
      {
        text: "This options favors Another, so you may get Another points.",
        typeOfPoint: "Another",
        numberOfPoints: 2,
        nextText: 34,
      },
      {
        text: "This options favors People, so you may get People points.",
        typeOfPoint: "People",
        numberOfPoints: 1,
        nextText: 34,
      },
    ],
  },
  {
    id: 34,
    text: "Question number34",
    options: [
      {
        text: "This options favors People, so you may get People points.",
        typeOfPoint: "People",
        numberOfPoints: 3,
        nextText: 35,
      },
      {
        text: "This options favors Nature, so you may get Nature points.",
        typeOfPoint: "Nature",
        numberOfPoints: 1,
        nextText: 35,
      },
    ],
  },
  {
    id: 35,
    text: "Question number35",
    options: [
      {
        text: "This options favors Business, so you may get Business points.",
        typeOfPoint: "Business",
        numberOfPoints: 3,
        nextText: 36,
      },
      {
        text: "This options favors SomeThn, so you may get SomeThn points.",
        typeOfPoint: "SomeThn",
        numberOfPoints: 1,
        nextText: 36,
      },
    ],
  },
  {
    id: 36,
    text: "Question number36",
    options: [
      {
        text: "This options favors People, so you may get People points.",
        typeOfPoint: "People",
        numberOfPoints: 2,
        nextText: 37,
      },
      {
        text: "This options favors Business, so you may get Business points.",
        typeOfPoint: "Business",
        numberOfPoints: 1,
        nextText: 37,
      },
    ],
  },
  {
    id: 37,
    text: "Question number37",
    options: [
      {
        text: "This options favors People, so you may get People points.",
        typeOfPoint: "People",
        numberOfPoints: 2,
        nextText: 38,
      },
      {
        text: "This options favors Business, so you may get Business points.",
        typeOfPoint: "Business",
        numberOfPoints: 1,
        nextText: 38,
      },
    ],
  },
  {
    id: 38,
    text: "Question number38",
    options: [
      {
        text: "This options favors Another, so you may get Another points.",
        typeOfPoint: "Another",
        numberOfPoints: 2,
        nextText: 39,
      },
      {
        text: "This options favors Nature, so you may get Nature points.",
        typeOfPoint: "Nature",
        numberOfPoints: 1,
        nextText: 39,
      },
    ],
  },
  {
    id: 39,
    text: "Question number39",
    options: [
      {
        text: "This options favors Another, so you may get Another points.",
        typeOfPoint: "Another",
        numberOfPoints: 2,
        nextText: 40,
      },
      {
        text: "This options favors People, so you may get People points.",
        typeOfPoint: "People",
        numberOfPoints: 1,
        nextText: 40,
      },
    ],
  },
  {
    id: 40,
    text: "Question number40",
    options: [
      {
        text: "This options favors Business, so you may get Business points.",
        typeOfPoint: "Business",
        numberOfPoints: 2,
        nextText: 41,
      },
      {
        text: "This options favors People, so you may get People points.",
        typeOfPoint: "People",
        numberOfPoints: 1,
        nextText: 41,
      },
    ],
  },
  {
    id: 41,
    text: "Question number41",
    options: [
      {
        text: "This options favors Nature, so you may get Nature points.",
        typeOfPoint: "Nature",
        numberOfPoints: 2,
        nextText: 42,
      },
      {
        text: "This options favors People, so you may get People points.",
        typeOfPoint: "People",
        numberOfPoints: 1,
        nextText: 42,
      },
    ],
  },
  {
    id: 42,
    text: "Question number42",
    options: [
      {
        text: "This options favors Business, so you may get Business points.",
        typeOfPoint: "Business",
        numberOfPoints: 2,
        nextText: 43,
      },
      {
        text: "This options favors Nature, so you may get Nature points.",
        typeOfPoint: "Nature",
        numberOfPoints: 1,
        nextText: 43,
      },
    ],
  },
  {
    id: 43,
    text: "Question number43",
    options: [
      {
        text: "This options favors Nature, so you may get Nature points.",
        typeOfPoint: "Nature",
        numberOfPoints: 2,
        nextText: 44,
      },
      {
        text: "This options favors Business, so you may get Business points.",
        typeOfPoint: "Business",
        numberOfPoints: 1,
        nextText: 44,
      },
    ],
  },
  {
    id: 44,
    text: "Question number44",
    options: [
      {
        text: "This options favors People, so you may get People points.",
        typeOfPoint: "People",
        numberOfPoints: 2,
        nextText: -1,
      },
      {
        text: "This options favors Nature, so you may get Nature points.",
        typeOfPoint: "Nature",
        numberOfPoints: 1,
        nextText: -1,
      },
    ],
  },
];