const textNodes = [{
        id: 1,
        text: "Ricola’s trusted honey supplier has taken a even more sustainable path, which has significantly increased their prices. What would you do ?",
        options: [{
                text: "Option A: This option is better for nature, so you may get Nature points.",
                typeOfPoint: "nature",
                numberOfPoints: 1,
                nextText: 2
            },
            {
                text: "Option B: This options favors small businesses, so you may get People points.",
                typeOfPoint: "people",
                numberOfPoints: 3,
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

            }
        ]
    },
]