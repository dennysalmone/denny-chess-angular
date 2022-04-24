import {Figure} from '../figures/figure';
import {Position} from '../positions.moves/position'
import {AbstractFigure} from '../figures/figure'

export class King extends AbstractFigure implements Figure  {
    name = 'King';
   
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

    return this.moviesForFigure;
    }
    constructor(color: boolean, position: Position, chessboard: any, underProtection: any) {
        super()
        if (color) {
            this.image_src = '../../../assets/icons/white_king.png'
        } else {
            this.image_src = '../../../assets/icons/black_king.png'
        }
        this.color = color;
        this.position = position;
        this.chessboard = chessboard;
        this.underProtection = underProtection;
    }
}