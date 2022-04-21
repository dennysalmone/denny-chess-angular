import {Figure} from '../figures/figure';
import {Position} from '../positions.moves/position'
import {AbstractFigure} from '../figures/figure'

export class Bishop extends AbstractFigure implements Figure  {
    name = 'Bishop';
    possibleMoves() {
        this.moviesForFigure = []
        for (let i=1; i<8; i++) {
            if (this.chessboard[this.position.y+i] && this.chessboard[this.position.y+i][this.position.x-i] === null) {
                this.moviesForFigure.push({y: this.position.y+i, x: this.position.x-i})
            }
            if (this.chessboard[this.position.y+i] && this.chessboard[this.position.y+i][this.position.x-i]) {
                if (this.chessboard[this.position.y+i][this.position.x-i].color === this.color) {
                    break;
                } else {
                    this.moviesForFigure.push({y: this.position.y+i, x: this.position.x-i});
                    break;
                }
            }
        }
        for (let i=1; i<8; i++) {
            if (this.chessboard[this.position.y-i] && this.chessboard[this.position.y-i][this.position.x+i] === null) {
                this.moviesForFigure.push({y: this.position.y-i, x: this.position.x+i})
            }
            if (this.chessboard[this.position.y-i] && this.chessboard[this.position.y-i][this.position.x+i]) {
                if (this.chessboard[this.position.y-i][this.position.x+i].color === this.color) {
                    break;
                } else {
                    this.moviesForFigure.push({y: this.position.y-i, x: this.position.x+i});
                    break;
                }
            }
        }
        for (let i=1; i<8; i++) {
            if (this.chessboard[this.position.y+i] && this.chessboard[this.position.y+i][this.position.x+i] === null) {
                this.moviesForFigure.push({y: this.position.y+i, x: this.position.x+i})
            }
            if (this.chessboard[this.position.y+i] && this.chessboard[this.position.y+i][this.position.x+i]) {
                if (this.chessboard[this.position.y+i][this.position.x+i].color === this.color) {
                    break;
                } else {
                    this.moviesForFigure.push({y: this.position.y+i, x: this.position.x+i});
                    break;
                }
            }
        }
        for (let i=1; i<8; i++) {
            if (this.chessboard[this.position.y-i] && this.chessboard[this.position.y-i][this.position.x-i] === null) {
                this.moviesForFigure.push({y: this.position.y-i, x: this.position.x-i})
            }
            if (this.chessboard[this.position.y-i] && this.chessboard[this.position.y-i][this.position.x-i]) {
                if (this.chessboard[this.position.y-i][this.position.x-i].color === this.color) {
                    break;
                } else {
                    this.moviesForFigure.push({y: this.position.y-i, x: this.position.x-i});
                    break;
                }
            }
        }
        return this.moviesForFigure;
    }
    constructor(color: boolean, position: Position, chessboard: any) {
        super();
        if (color) {
            this.image_src = '../../../assets/icons/white_bishop.png'
        } else {
            this.image_src = '../../../assets/icons/black_bishop.png'
        }
        this.color = color;
        this.position = position;
        this.chessboard = chessboard;
    }
}