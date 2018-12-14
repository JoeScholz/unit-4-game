var wins = 0
var losses = 0

var greenGem;
var redGem;
var yellowGem;
var purpleGem;

var userScore = 0;

var gameNum;
//120-19+1=102
function startFunction(){

gameNumber = Math.floor(Math.random() * 102) + 19
console.log(gameNumber);

$("#gameNum").html(gameNumber);
$("#userNum").html(userScore = 0);

greenGem = Math.floor(Math.random() * 12) + 1;
console.log("green ", greenGem);
redGem = Math.floor(Math.random() * 12) + 1;
console.log("red ", redGem);
yellowGem = Math.floor(Math.random() * 12) + 1;
console.log("yellow ", yellowGem);
purpleGem = Math.floor(Math.random() * 12) + 1;
console.log("purple ", purpleGem);
}
//globalFunctions
// function winFunction() {
//     if (userScore === gameNumber) {
//         console.log("you win");
//         startFunction();
//     }
// }

// function loseFunction() {
//     if (userScore > gameNumber) {
//         console.log("You Lose");
//         startFunction();
//     }
// }

//call to start!!!
startFunction();

//gameLogic
$(".green").on("click", function () {
    userScore += greenGem
    console.log("totalUserScore " + userScore);
    $("#userNum").text(userScore);

        if (userScore === gameNumber) {
            console.log("you win");
            alert("You win! Keep the Gems! Play again?");
            wins++;
            $("#wins").text(wins);
            startFunction();
        }
    
    
        if (userScore > gameNumber) {
            console.log("You Lose");
            alert("Too bad! You lose the Gems. Play again?");
            losses++;
            $("#losses").text(losses);
            startFunction();
        }
    
    
});

$(".red").on("click", function () {
    userScore += redGem
    console.log("totalUserScore " + userScore);
    $("#userNum").text(userScore);
        
    if (userScore === gameNumber) {
        console.log("you win");
        alert("You win! Keep the Gems! Play again?");
        wins++;
        $("#wins").text(wins);
        startFunction();
    }


    if (userScore > gameNumber) {
        console.log("You Lose");
        alert("Too bad! You lose the Gems. Play again?");
        losses++;
        $("#losses").text(losses);
        startFunction();
    }
});

$(".yellow").on("click", function () {
    userScore += yellowGem
    console.log("totalUserScore " + userScore);
    $("#userNum").text(userScore);
    
    if (userScore === gameNumber) {
        console.log("you win");
        alert("You win! Keep the Gems! Play again?");
        wins++;
        $("#wins").text(wins);
        startFunction();
        alert("You win! Keep the Gems! Play again?");

    }


    if (userScore > gameNumber) {
        console.log("You Lose");
        alert("Too bad! You lose the Gems. Play again?");
        losses++;
        $("#losses").text(losses);
        startFunction();

    }
});

$(".purple").on("click", function () {
    userScore += purpleGem
    console.log("totalUserScore " + userScore);
    $("#userNum").text(userScore);
    
    if (userScore === gameNumber) {
        console.log("you win");
        alert("You win! Keep the Gems! Play again?");
        wins++;
        $("#wins").text(wins);
        startFunction();
    }


    if (userScore > gameNumber) {
        console.log("You Lose");
        alert("Too bad! You lose the Gems. Play again?");
        losses++;
        $("#losses").text(losses);
        startFunction();
    }
});




// function winFunction() {
//     if (userScore === gameNumber) {
//         console.log("you win");
//     }
// }

// function loseFunction() {
//     if (userScore > gameNumber) {
//         console.log("You Lose");
//     }
// }
// random number for gameNum 19-120
// random number for crystalNum 1-12 x 4
// scoreCount
// winsCount
// lossCount
// reset/start
    //regenerate numbers, add wins, add loss, check for number (not other buttn), clear scoreCount, leave wins and losses.
