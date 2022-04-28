import {Figure} from '../figures/figure';
import {Position} from '../positions.moves/position'
import {AbstractFigure} from '../figures/figure'
import {Rook} from './rook';

export class King extends AbstractFigure implements Figure  {
    name = 'King';
    isKing = true;
    kingNotMove = true;

   
    possibleMoves() {
    this.moviesForFigure = []

    if (this.chessboard[this.position.y] && this.chessboard[this.position.y][this.position.x-1] === null) {
        this.moviesForFigure.push({y: this.position.y, x: this.position.x-1})
    }
    if (this.chessboard[this.position.y] && this.chessboard[this.position.y][this.position.x-1] && 
        this.chessboard[this.position.y][this.position.x-1].color === !this.color) {
        this.moviesForFigure.push({y: this.position.y, x: this.position.x-1});
    }

    if (this.chessboard[this.position.y] && this.chessboard[this.position.y][this.position.x+1] === null) {
        this.moviesForFigure.push({y: this.position.y, x: this.position.x+1})
    }
    if (this.chessboard[this.position.y] && this.chessboard[this.position.y][this.position.x+1] && 
        this.chessboard[this.position.y][this.position.x+1].color === !this.color) {
        this.moviesForFigure.push({y: this.position.y, x: this.position.x+1});
    }

    if (this.chessboard[this.position.y-1] && this.chessboard[this.position.y-1][this.position.x-1] === null) {
        this.moviesForFigure.push({y: this.position.y-1, x: this.position.x-1})
    }
    if (this.chessboard[this.position.y-1] && this.chessboard[this.position.y-1][this.position.x-1] && 
        this.chessboard[this.position.y-1][this.position.x-1].color === !this.color) {
        this.moviesForFigure.push({y: this.position.y-1, x: this.position.x-1});
    }

    if (this.chessboard[this.position.y-1] && this.chessboard[this.position.y-1][this.position.x+1] === null) {
        this.moviesForFigure.push({y: this.position.y-1, x: this.position.x+1})
    }
    if (this.chessboard[this.position.y-1] && this.chessboard[this.position.y-1][this.position.x+1] && 
        this.chessboard[this.position.y-1][this.position.x+1].color === !this.color) {
        this.moviesForFigure.push({y: this.position.y-1, x: this.position.x+1});
    }

    if (this.chessboard[this.position.y+1] && this.chessboard[this.position.y+1][this.position.x-1] === null) {
        this.moviesForFigure.push({y: this.position.y+1, x: this.position.x-1})
    }
    if (this.chessboard[this.position.y+1] && this.chessboard[this.position.y+1][this.position.x-1] && 
        this.chessboard[this.position.y+1][this.position.x-1].color === !this.color) {
        this.moviesForFigure.push({y: this.position.y+1, x: this.position.x-1});
    }

    if (this.chessboard[this.position.y+1] && this.chessboard[this.position.y+1][this.position.x+1] === null) {
        this.moviesForFigure.push({y: this.position.y+1, x: this.position.x+1})
    }
    if (this.chessboard[this.position.y+1] && this.chessboard[this.position.y+1][this.position.x+1] && 
        this.chessboard[this.position.y+1][this.position.x+1].color === !this.color) {
        this.moviesForFigure.push({y: this.position.y+1, x: this.position.x+1});
    }

    if (this.chessboard[this.position.y+1] && this.chessboard[this.position.y+1][this.position.x] === null) {
        this.moviesForFigure.push({y: this.position.y+1, x: this.position.x})
    }
    if (this.chessboard[this.position.y+1] && this.chessboard[this.position.y+1][this.position.x] && 
        this.chessboard[this.position.y+1][this.position.x].color === !this.color) {
        this.moviesForFigure.push({y: this.position.y+1, x: this.position.x});
    }

    if (this.chessboard[this.position.y-1] && this.chessboard[this.position.y-1][this.position.x] === null) {
        this.moviesForFigure.push({y: this.position.y-1, x: this.position.x})
    }
    if (this.chessboard[this.position.y-1] && this.chessboard[this.position.y-1][this.position.x] && 
        this.chessboard[this.position.y-1][this.position.x].color === !this.color) {
        this.moviesForFigure.push({y: this.position.y-1, x: this.position.x});
    }

    // Castling white

    // if (this.chessboard[7][4] && (this.chessboard[7][4] as King).kingNotMove &&
    // this.chessboard[7][7] && (this.chessboard[7][7] as Rook).rookNotMove &&
    // this.chessboard[7][6] === null &&
    // this.chessboard[7][5] === null &&
    // this.chessboard.kingUnderShah === false
    // ) {

    // }

    // Castling black

    return this.moviesForFigure;
    }
    constructor(color: boolean, position: Position, chessboard: any) {
        super()
        if (color) {
            this.image_src = '../../../assets/icons/white_king.png'
        } else {
            this.image_src = '../../../assets/icons/black_king.png'
        }
        this.color = color;
        this.position = position;
        this.chessboard = chessboard;

    }
}