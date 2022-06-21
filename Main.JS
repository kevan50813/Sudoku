import { Sudoku } from "Sudoku.js";
import { Board } from "Board.JS";

let board = new Board(document.querySelector("#container"), {
  smartOrdering: true,
  smartChoices: true,
});

let sdk = new Sudoku();
