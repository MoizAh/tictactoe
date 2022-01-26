// Factory function to create a new player
const Player = (player, marker) => {
  return {
    player,
    marker,
  };
};

// Module to store the gameboard, and game functionality
const tictactoe = (() => {
  const gameboard = ["", "", "", "", "", "", "", "", ""];

  const grid = document.querySelector(".grid");
  const commentary = document.querySelector(".commentary h1");

  // Creates the tic-tac-toe grid
  let i = 0;
  gameboard.forEach((tile) => {
    const square = document.createElement("div");
    square.classList.add("square");
    square.dataset.squareIndex = `${i}`;
    square.textContent = tile;
    grid.appendChild(square);
    i++;
  });

  // Accessing squares created in previous function
  const squares = document.querySelectorAll(".grid .square");

  const playerOne = Player("One", "X");
  let playerOneTurn = 1;
  const playerTwo = Player("Two", "O");
  let playerTwoTurn = 0;

  // Functionality to take turns and check for a winner/tie game
  const game = () => {
    squares.forEach((tile, index) => {
      tile.addEventListener("click", () => {
        if (playerOneTurn === 1) {
          tile.textContent = playerOne.marker;
          tile.style.color = "#FFB703";
          playerOneTurn = 0;
          playerTwoTurn = 1;
          gameboard.splice(index, 1, playerOne.marker);
          tile.style.pointerEvents = "none";
          commentary.textContent = "Player 2, make your move!";
          checkWinner();
        } else if (playerOneTurn === 0) {
          tile.textContent = playerTwo.marker;
          tile.style.color = "#FB8500";
          playerTwoTurn = 0;
          playerOneTurn = 1;
          gameboard.splice(index, 1, playerTwo.marker);
          tile.style.pointerEvents = "none";
          commentary.textContent = "Player 1, your turn!";
          checkWinner();
        }
      });
    });
  };

  const checkTie = () => {
    const fullBoard = gameboard.every((tile) => {
      if (tile === "X" || tile === "O") {
        return true;
      }
    });
    if (fullBoard === true) {
      commentary.textContent = "It's a tie game!";
    }
  };

  const checkWinner = () => {
    checkTie();
    winConditions.forEach((conditions) => {
      if (
        gameboard[conditions[0]] === "X" &&
        gameboard[conditions[1]] === "X" &&
        gameboard[conditions[2]] === "X"
      ) {
        commentary.textContent = "Player 1 is the winner!";
        grid.style.pointerEvents = "none";
      } else if (
        gameboard[conditions[0]] === "O" &&
        gameboard[conditions[1]] === "O" &&
        gameboard[conditions[2]] === "O"
      ) {
        commentary.textContent = "Player 2 is the winner!";
        grid.style.pointerEvents = "none";
      }
    });
  };

  // Possible permutations for a player to win
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const reset = document.querySelector(".reset button");

  reset.addEventListener("click", () => {
    document.location.reload();
  });

  return {
    game,
    reset,
  };
})();

tictactoe.game();
