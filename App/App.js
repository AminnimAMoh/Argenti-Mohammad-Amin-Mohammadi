const fs = require("fs");

//Creating an array to reserve all hands read from the text file.
let inputData = [];

//Runnig a File Scan on the poker-hands.txt to read the data for the game.
fs.readFile("Files/poker-hands.txt", "utf8", (err, res) => {
  //In case of any error print the Error.
  err && console.log(err);

  //Spliting each hand in the data using enter ('\n') in the string.
  //So we will have access to one hand at each index of the inputData array.
  inputData = res.split("\n");

  let hands = {
    playerOne: [],
    playerTwo: [],
  };

  //looping through all hands in the inputData array.
  //So we can splite each card and shuffle hands to our players.
  inputData.map((data, dataIndex) => {
    //Spliting each card in each hand using the white space between them.
    //And reserving all 10 cards in an array
    const splitedData=data.split(" ");

    //Two variables to reserve each players cards.
    let handOne=[] 
    let handTwo=[]

    // looping through all cards in a hand and suffle them between our two players.
    //First 5 cards will go to player one.
    //Second (rest) will go to player two.
    splitedData.forEach((handData,index)=>{
      //Condition to seperate the players one cards from player two cards.
      //If the itteration index is less than 5 cards go to player one so we reserved them in handOne
      //Else the cards will be reserved in handTwo
        index<5 ? handOne.push(handData) : handTwo.push(handData)
        index===9 && hands.playerOne.push(handOne); hands.playerTwo.push(handTwo)
    })
  });
  console.log(hands);

//   console.log(inputData);
});
