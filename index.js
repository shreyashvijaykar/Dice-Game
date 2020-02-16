var player1 = Math.floor(Math.random() * 6 + 1);
var player2 = Math.floor(Math.random() * 6 + 1);
var randomdiceimg1 = "images/dice" + player1 + ".png";
var randomdiceimg2 = "images/dice" + player2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomdiceimg1);
document.querySelectorAll("img")[1].setAttribute("src", randomdiceimg2);


if(player1>player2){
    document.querySelector("h1").innerHTML = "Player 1 won";
}
else if(player2>player1){
    document.querySelector("h1").innerHTML = "Player 2 won";
}
else{
    document.querySelector("h1").innerHTML = "It's a Tie"
}