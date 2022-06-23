// dice 1

var random1 = Math.round(Math.random()*5+1);

var newDice1 = "images/dice" + random1 + ".png";

var img1 = document.querySelectorAll("img")[0]

var img1New = img1.setAttribute("src", newDice1);

// dice 2

var random2 = Math.round(Math.random()*5+1);

var newDice2 = "images/dice" + random2 + ".png";

var img2 = document.querySelectorAll("img")[1]

var img2New = img2.setAttribute("src", newDice2);

// outcome change

if(random1 > random2){
  document.querySelector("h1").textContent = "Player 1 Wins!";
}

else if(random1 < random2){
  document.querySelector("h1").textContent = "Player 2 Wins!";
}

else{
  document.querySelector("h1").textContent = "Tis A Draw!";
}
