const Player = (player, marker) => {
  return {
    player,
    marker,
  };
};

const tictactoe = (() => {
  const gameboard = ["", "", "", "", "", "", "", "", ""];

  const grid = document.querySelector(".grid");

  let i = 0;
  gameboard.forEach((tile) => {
    const square = document.createElement("div");
    square.classList.add("square");
    square.dataset.squareIndex = `${i}`;
    square.textContent = tile;
    grid.appendChild(square);
    i++;
  });

  const squares = document.querySelectorAll(".grid .square");

  const playerOne = Player("One", "X");
  let playerOneTurn = 1;
  const playerTwo = Player("Two", "O");
  let playerTwoTurn = 0;

  const game = () => {
    squares.forEach((tile, index) => {
      tile.addEventListener("click", () => {
        if (playerOneTurn === 1) {
          tile.textContent = playerOne.marker;
          playerOneTurn = 0;
          playerTwoTurn = 1;
          gameboard.splice(index, 1, playerOne.marker);
          tile.style.pointerEvents = "none";
        } else if (playerOneTurn === 0) {
          tile.textContent = playerTwo.marker;
          playerTwoTurn = 0;
          playerOneTurn = 1;
          gameboard.splice(index, 1, playerTwo.marker);
          tile.style.pointerEvents = "none";
        }
      });
    });
  };

  const checkWinner = () => {};

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

  return {
    gameboard,
    game,
    winConditions,
    checkWinner,
  };
})();

tictactoe.game();
