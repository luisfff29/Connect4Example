var playerOne = prompt(
  "Player One: Enter Your Name, you will be Blue",
  "Player A"
);
var playerTwo = prompt(
  "Player Two: Enter Your Name, you will be Red",
  "Player B"
);

var count = 0;
var turn = playerOne;
var gameOver = false;

function yourTurn(nextTurn, myColor, nextColor, parent) {
  for (var i = 0; i < 6; i++) {
    if (!parent.eq(i).attr("class")) {
      parent.eq(i).addClass(myColor);
      if (
        !checkVerWin(turn) &&
        !checkHorWin(turn) &&
        !checkDiaRWin(turn) &&
        !checkDiaLWin(turn)
      ) {
        $("#moves").text(
          `${nextTurn}: it is your turn, please pick a column to drop your ${nextColor} chip.`
        );
      } else {
        gameOver = true;
      }
      turn = nextTurn;
      count++;
      break;
    } else {
      continue;
    }
  }
}

function checkIndex(col, row) {
  return $("tr").eq(col).find("td").eq(row);
}

function checkGroups(one, two, three, four) {
  if (one == two && one == three && one == four && one != undefined) {
    return true;
  }
}

function checkVerWin(player) {
  for (var x = 0; x < 7; x++) {
    for (var y = 0; y < 3; y++) {
      var first = checkIndex(x, y);
      var second = checkIndex(x, y + 1);
      var third = checkIndex(x, y + 2);
      var fourth = checkIndex(x, y + 3);
      if (
        checkGroups(
          first.attr("class"),
          second.attr("class"),
          third.attr("class"),
          fourth.attr("class")
        )
      ) {
        first.css("border", "1px solid yellow");
        second.css("border", "1px solid yellow");
        third.css("border", "1px solid yellow");
        fourth.css("border", "1px solid yellow");
        $("#moves").text(
          player + " has won! Refresh your browser to play again!"
        );
        return true;
      }
    }
  }
}

function checkHorWin(player) {
  for (var x = 0; x < 4; x++) {
    for (var y = 0; y < 6; y++) {
      var first = checkIndex(x, y);
      var second = checkIndex(x + 1, y);
      var third = checkIndex(x + 2, y);
      var fourth = checkIndex(x + 3, y);
      if (
        checkGroups(
          checkIndex(x, y).attr("class"),
          checkIndex(x + 1, y).attr("class"),
          checkIndex(x + 2, y).attr("class"),
          checkIndex(x + 3, y).attr("class")
        )
      ) {
        first.css("border", "1px solid yellow");
        second.css("border", "1px solid yellow");
        third.css("border", "1px solid yellow");
        fourth.css("border", "1px solid yellow");
        $("#moves").text(
          player + " has won! Refresh your browser to play again!"
        );
        return true;
      }
    }
  }
}

function checkDiaRWin(player) {
  for (var x = 0; x < 4; x++) {
    for (var y = 0; y < 3; y++) {
      var first = checkIndex(x, y);
      var second = checkIndex(x + 1, y + 1);
      var third = checkIndex(x + 2, y + 2);
      var fourth = checkIndex(x + 3, y + 3);
      if (
        checkGroups(
          checkIndex(x, y).attr("class"),
          checkIndex(x + 1, y + 1).attr("class"),
          checkIndex(x + 2, y + 2).attr("class"),
          checkIndex(x + 3, y + 3).attr("class")
        )
      ) {
        first.css("border", "1px solid yellow");
        second.css("border", "1px solid yellow");
        third.css("border", "1px solid yellow");
        fourth.css("border", "1px solid yellow");
        $("#moves").text(
          player + " has won! Refresh your browser to play again!"
        );
        return true;
      }
    }
  }
}

function checkDiaLWin(player) {
  for (var x = 3; x < 7; x++) {
    for (var y = 0; y < 3; y++) {
      var first = checkIndex(x, y);
      var second = checkIndex(x - 1, y + 1);
      var third = checkIndex(x - 2, y + 2);
      var fourth = checkIndex(x - 3, y + 3);
      if (
        checkGroups(
          checkIndex(x, y).attr("class"),
          checkIndex(x - 1, y + 1).attr("class"),
          checkIndex(x - 2, y + 2).attr("class"),
          checkIndex(x - 3, y + 3).attr("class")
        )
      ) {
        first.css("border", "1px solid yellow");
        second.css("border", "1px solid yellow");
        third.css("border", "1px solid yellow");
        fourth.css("border", "1px solid yellow");
        $("#moves").text(
          player + " has won! Refresh your browser to play again!"
        );
        return true;
      }
    }
  }
}

$(function () {
  $("tr").click(function () {
    if (gameOver == false) {
      var parent = $(this).children();
      if (turn === playerOne && !parent.eq(5).attr("class")) {
        yourTurn(playerTwo, "blue", "red", parent);
      } else if (turn === playerTwo && !parent.eq(5).attr("class")) {
        yourTurn(playerOne, "red", "blue", parent);
      } else if (count === 42) {
        $("#moves").text("Nobody has won. Refresh your browser to play again!");
      }
    }
  });
});
