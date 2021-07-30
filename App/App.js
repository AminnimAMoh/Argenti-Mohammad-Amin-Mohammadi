const fs = require("fs");

let inputData = [];

fs.readFile("Files/poker-hands.txt", "utf8", (err, res) => {
  err && console.log(err);
  inputData = res.split("\n");
  let hands = {
    playerOne: [],
    playerTwo: [],
  };
  inputData.map((data) => {
    const splitedData=data.split(" ");
    console.log(splitedData);
  });

//   console.log(inputData);
});
