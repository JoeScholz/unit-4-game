var wins = 0
var losses = 0

var greenGem = 0;
var redGem;
var yellowGem;
var purpleGem;

var userScore;

var gameNum;
//120-19+1=102
gameNumber = Math.floor(Math.random() * 102) + 19
console.log(gameNum);

$("#gameNum").html(gameNumber);

var crystalNum;
crystalNum = Math.floor(Math.random() * 12) + 1
console.log(crystalNum)

$(".green").on("click" greenGem) + (crystalNum));
// random number for gameNum 19-120
// random number for crystalNum 1-12 x 4
// scoreCount
// winsCount
// lossCount
// reset/start
    //regenerate numbers, add wins, add loss, check for number (not other buttn), clear scoreCount, leave wins and losses.
