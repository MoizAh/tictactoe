const tictactoe = (() => {
  const gameBoard = [
    ["X"],
    ["X"],
    ["O"],
    ["X"],
    ["X"],
    ["O"],
    ["X"],
    ["X"],
    ["O"],
  ];

  const displayGameBoard = () => {
    i = 0;
    const grid = document.querySelector(".grid");
    gameBoard.forEach((tile) => {
      const tiles = document.createElement("button");
      tiles.classList.add(`tile`);
      tiles.id = i;
      tiles.innerHTML = tile;
      grid.appendChild(tiles);
      i++;
    });
    return grid;
  };

  return {
    displayGameBoard,
  };
})();

const Players = (playerOne, playerTwo) => {
  const getPlayerOne = () => playerOne;
  const getPlayerTwo = () => playerTwo;

  return {
    getPlayerOne,
    getPlayerTwo,
  };
};

tictactoe.displayGameBoard();
