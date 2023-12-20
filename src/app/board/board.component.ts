import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit{
  squares: any[] = [];
  xIsNext: boolean = true;
  winner: string = '';

  constructor() {}

  ngOnInit(): void {
    this.newGame();
  }

  /**
   * Resets the game by initializing the squares array, setting the winner to an empty string,
   * and setting the xIsNext flag to true.
   */
  newGame(): void {
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
  }
  /**
   * Gets the current player.
   * @returns The current player ('X' or 'O').
   */
  get player(): string{
    return this.xIsNext ? 'X' : 'O';

  }
  /**
   * Makes a move on the board at the specified index.
   * If the square at the index is empty, it updates the square with the current player's symbol and toggles the turn to the next player.
   * @param idx The index of the square where the move is made.
   */
  makeMove(idx: number){
    if(!this.squares[idx]){
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    } 

    this.winner = this.calculateWinner();
   
  
  }

  /**
   * Calculates the winner of the tic-tac-toe game.
   * @returns The symbol of the winning player ('X' or 'O'), or an empty string if there is no winner yet.
   */
  calculateWinner(): string{
    const lines = [
      // Horizontal wins
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Vertical wins
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonal wins
      [0, 4, 8],
      [2, 4, 6]
    ];
    for(let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i];
      if(
        this.squares[a] && 
        this.squares[a] === this.squares[b] && 
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return '';
  }

  
}