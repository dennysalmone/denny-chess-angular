import {Figure} from '../figures/figure';
import {Position} from '../positions.moves/position'
import {AbstractFigure} from '../figures/figure'

export class Pawn extends AbstractFigure implements Figure  {
    name = 'Pawn';
    possibleMoves() {
        this.moviesForFigure = []
        //for white
        if (this.color && this.chessboard[this.position.y-1] && this.chessboard[this.position.y-1][this.position.x] === null) {
            this.moviesForFigure.push({y: this.position.y-1, x: this.position.x})
        }
        if (this.position.y === 6 && this.color && this.chessboard[this.position.y-1] && this.chessboard[this.position.y-2][this.position.x] === null) {
            this.moviesForFigure.push({y: this.position.y-2, x: this.position.x})
        }        
        if (this.color && this.chessboard[this.position.y-1] && this.chessboard[this.position.y-1][this.position.x+1]) {
            if (this.chessboard[this.position.y-1][this.position.x+1].color === this.color) {
            } else {
                this.moviesForFigure.push({y: this.position.y-1, x: this.position.x+1});
            }
        }
        if (this.color && this.chessboard[this.position.y-1] && this.chessboard[this.position.y-1][this.position.x-1]) {
            if (this.chessboard[this.position.y-1][this.position.x-1].color === this.color) {
            } else {
                this.moviesForFigure.push({y: this.position.y-1, x: this.position.x-1});
            }
        }
        //for black
        if (!this.color && this.chessboard[this.position.y+1] && this.chessboard[this.position.y+1][this.position.x] === null) {
            this.moviesForFigure.push({y: this.position.y+1, x: this.position.x})
        }
        if (this.position.y === 6 && !this.color && this.chessboard[this.position.y-1] && this.chessboard[this.position.y+2][this.position.x] === null) {
            this.moviesForFigure.push({y: this.position.y+2, x: this.position.x})
        }        
        if (!this.color && this.chessboard[this.position.y+1] && this.chessboard[this.position.y+1][this.position.x+1]) {
            if (this.chessboard[this.position.y+1][this.position.x+1].color === this.color) {
            } else {
                this.moviesForFigure.push({y: this.position.y+1, x: this.position.x+1});
            }
        }
        if (!this.color && this.chessboard[this.position.y+1] && this.chessboard[this.position.y+1][this.position.x-1]) {
            if (this.chessboard[this.position.y+1][this.position.x-1].color === this.color) {
            } else {
                this.moviesForFigure.push({y: this.position.y+1, x: this.position.x-1});
            }
        }

        return this.moviesForFigure;
    }
    constructor(color: boolean, position: Position, chessboard: any) {
        super();
        if (color) {
            this.image_src = '../../../assets/icons/white_pawn.png'
        } else {
            this.image_src = '../../../assets/icons/black_pawn.png'
        }
        this.color = color;
        this.position = position;
        this.chessboard = chessboard;
    }
}