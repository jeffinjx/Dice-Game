const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {

  const random1 = Math.round(Math.random()*5+1);
  const random2 = Math.round(Math.random()*5+1);
  let outcomeTitle = [];

  if (random1 > random2) {
    outcomeTitle = "Player 1 Wins"
  }
  if (random1 < random2) {
    outcomeTitle = "Player 2 Wins"
  }else if (random1 === random2){
    outcomeTitle = "Tis A Draw!"
  };

  const changedDice = ({
    title: outcomeTitle,
    roll1: random1,
    roll2: random2
  });

  res.render("home", changedDice);

});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
