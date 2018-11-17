$(document).ready(function(){
var randomGoal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#goal").text(randomGoal);
var green = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var red = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var blue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var yellow = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

// test
console.log(randomGoal);

var totalScore = 0;
var wins = 0;
var losses = 0;

// print number of wins and losses
$("#wins").text(wins);
$("#losses").text(losses);

// restart the game
function restart (){
    var randomGoal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $('#goal').text(randomGoal);

    var green = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    var red = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    var blue = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    var yellow = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    totalScore = 0;
}

// announce win
function winsCount () {
    wins++;
    alert("You Win!");
    $("#wins").text(wins);
    restart();
}

// announce loss
function lossesCount () {
    losses++;
    alert("You Lose!");
    $("#losses").text(losses);
    restart();
}

$("#green").on("click", function (){
    totalScore = totalScore + green;
    $("#totalScore").text(totalScore);
    // win
    if (totalScore === randomGoal) {
        winsCount();
    // lose
    } else if (totalScore > randomGoal){
        lossesCount ();
    }
})

$("#blue").on("click", function (){
    totalScore = totalScore + blue;
    $("#totalScore").text(totalScore);
    // win
    if (totalScore === randomGoal) {
        winsCount();
    // lose
    } else if (totalScore > randomGoal){
        lossesCount ();
    }
})


$("#red").on("click", function (){
    totalScore = totalScore + red;
    $("#totalScore").text(totalScore);
    // win
    if (totalScore === randomGoal) {
        winsCount();
    // lose
    } else if (totalScore > randomGoal){
        lossesCount ();
    }
})

 
$("#yellow").on("click", function (){
    totalScore = totalScore + yellow;
    $("#totalScore").text(totalScore);
    // win
    if (totalScore === randomGoal) {
        winsCount();
    // lose
    } else if (totalScore > randomGoal){
        lossesCount ();
    }
})

})