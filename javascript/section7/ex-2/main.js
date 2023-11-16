const fs = require('fs');
const yaml = require('js-yaml');

class Chessboard {
  constructor() {
    // Initialize an 8x8 chessboard with empty squares
    this.board = Array.from({ length: 8 }, () => Array(8).fill('-'));
  }

  printBoard() {
    for (let row = 0; row < 8; row++) {
      console.log(this.board[row].join(' '));
    }
  }

  movePiece(fromRow, fromCol, toRow, toCol) {
    const piece = this.board[fromRow][fromCol];
    this.board[toRow][toCol] = piece;
    this.board[fromRow][fromCol] = '-';
  }

  killPiece(row, col) {
    this.board[row][col] = '-';
  }

  saveToFile(filename) {
    const yamlData = yaml.dump({ board: this.board });
    fs.writeFileSync(filename, yamlData, 'utf-8');
    console.log(`Chessboard saved to ${filename}`);
  }

  loadFromFile(filename) {
    const yamlData = fs.readFileSync(filename, 'utf-8');
    const data = yaml.load(yamlData);
    this.board = data.board;
    console.log(`Chessboard loaded from ${filename}`);
  }
}

// Test the Chessboard class
const chessboard = new Chessboard();

// Print the initial chessboard
console.log("Initial Chessboard:");
chessboard.printBoard();

// Move a piece
chessboard.movePiece(1, 0, 3, 0);

// Kill a piece
chessboard.killPiece(7, 7);

// Print the updated chessboard
console.log("\nChessboard after moving and killing:");
chessboard.printBoard();

// Save the chessboard to a YAML file
chessboard.saveToFile('chessboard.yaml');

// Load the chessboard from a YAML file
const loadedChessboard = new Chessboard();
loadedChessboard.loadFromFile('chessboard.yaml');

// Print the loaded chessboard
console.log("\nChessboard loaded from file:");
loadedChessboard.printBoard();
