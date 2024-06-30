var buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];

var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
    if (!started) {
  
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
});

$(".btn").click((event) => {
    let userChosenColour = $(event.target).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userClickedPattern[userClickedPattern.length-1]);
    console.log("userClickedPattern is ", userClickedPattern[userClickedPattern.length-1]);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){

        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

        console.log("wrong");

        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }

}

function nextSequence() {
    level++;
    $("#level-title").text("Level " + level);
    let randomNumber = Math.floor(4*Math.random())
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log("gamePattern is ", gamePattern);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    let audio = new Audio("./sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

function playSound(name) {
    let audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(() => {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}
// nextSequence();
function startOver() {

    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
  }