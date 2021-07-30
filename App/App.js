const fs = require("fs");

let inputData = [];

fs.readFile("Files/poker-hands.txt", "utf8", (err, res) => {
  err && console.log(err);
  inputData = res.split("\n");
  let hands = {
    playerOne: [],
    playerTwo: [],
  };
  inputData.map((data, dataIndex) => {
    const splitedData=data.split(" ");
    let handOne=[] 
    let handTwo=[]
    splitedData.forEach((handData,index)=>{
        index<5 ? handOne.push(handData) : handTwo.push(handData)
        index===9 && hands.playerOne.push(handOne); hands.playerTwo.push(handTwo)
    })
  });
  console.log(hands);

//   console.log(inputData);
});
