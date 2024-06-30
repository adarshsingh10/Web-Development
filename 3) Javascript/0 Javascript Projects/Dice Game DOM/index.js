let randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice"+randomNumber1+".png");
let randomNumber2 = Math.floor(Math.random() * 6)+1;
document.querySelector(".img2").setAttribute("src", "./images/dice"+randomNumber2+".png");
let winner = "Draw!";
if (randomNumber1>randomNumber2) {
    winner = "Player 1 Wins!";
}
else if (randomNumber2>randomNumber1){
    winner = "Player 2 Wins!";
}
document.querySelector("h1").innerHTML = winner;