import {Figure} from '../figures/figure';
import {Position} from '../positions.moves/position'
import {AbstractFigure} from '../figures/figure'

export class Knight extends AbstractFigure implements Figure  {
    name = 'Knight';
    possibleMoves() {
        this.moviesForFigure = []
            if (this.chessboard[this.position.y+2] && this.chessboard[this.position.y+2][this.position.x+1] === null) {
                this.moviesForFigure.push({y: this.position.y+2, x: this.position.x+1})
            }
            if (this.chessboard[this.position.y+2] && this.chessboard[this.position.y+2][this.position.x+1]) {
                this.underProtection.push({y: this.position.y+2, x: this.position.x+1}) // underProtectionTest
                if (this.chessboard[this.position.y+2][this.position.x+1].color === this.color) {
                } else {
                    this.moviesForFigure.push({y: this.position.y+2, x: this.position.x+1});
                }
            }
            if (this.chessboard[this.position.y+2] && this.chessboard[this.position.y+2][this.position.x-1] === null) {
                this.moviesForFigure.push({y: this.position.y+2, x: this.position.x-1})
            }
            if (this.chessboard[this.position.y+2] && this.chessboard[this.position.y+2][this.position.x-1]) {
                this.underProtection.push({y: this.position.y+2, x: this.position.x-1}) // underProtectionTest
                if (this.chessboard[this.position.y+2][this.position.x-1].color === this.color) {
                } else {
                    this.moviesForFigure.push({y: this.position.y+2, x: this.position.x-1});
                }
            }
            if (this.chessboard[this.position.y-2] && this.chessboard[this.position.y-2][this.position.x+1] === null) {
                this.moviesForFigure.push({y: this.position.y-2, x: this.position.x+1})
            }
            if (this.chessboard[this.position.y-2] && this.chessboard[this.position.y-2][this.position.x+1]) {
                this.underProtection.push({y: this.position.y-2, x: this.position.x+1}) // underProtectionTest
                if (this.chessboard[this.position.y-2][this.position.x+1].color === this.color) {
                } else {
                    this.moviesForFigure.push({y: this.position.y-2, x: this.position.x+1});
                }
            }
            if (this.chessboard[this.position.y-2] && this.chessboard[this.position.y-2][this.position.x-1] === null) {
                this.moviesForFigure.push({y: this.position.y-2, x: this.position.x-1})
            }
            if (this.chessboard[this.position.y-2] && this.chessboard[this.position.y-2][this.position.x-1]) {
                this.underProtection.push({y: this.position.y-2, x: this.position.x-1}) // underProtectionTest
                if (this.chessboard[this.position.y-2][this.position.x-1].color === this.color) {
                } else {
                    this.moviesForFigure.push({y: this.position.y-2, x: this.position.x-1});
                }
            }
            // 2 part
            if (this.chessboard[this.position.y+1] && this.chessboard[this.position.y+1][this.position.x+2] === null) {
                this.moviesForFigure.push({y: this.position.y+1, x: this.position.x+2})
            }
            if (this.chessboard[this.position.y+1] && this.chessboard[this.position.y+1][this.position.x+2]) {
                this.underProtection.push({y: this.position.y+1, x: this.position.x+2}) // underProtectionTest
                if (this.chessboard[this.position.y+1][this.position.x+2].color === this.color) {
                } else {
                    this.moviesForFigure.push({y: this.position.y+1, x: this.position.x+2});
                }
            }
            if (this.chessboard[this.position.y+1] && this.chessboard[this.position.y+1][this.position.x-2] === null) {
                this.moviesForFigure.push({y: this.position.y+1, x: this.position.x-2})
            }
            if (this.chessboard[this.position.y+1] && this.chessboard[this.position.y+1][this.position.x-2]) {
                this.underProtection.push({y: this.position.y+1, x: this.position.x-2}) // underProtectionTest
                if (this.chessboard[this.position.y+1][this.position.x-2].color === this.color) {
                } else {
                    this.moviesForFigure.push({y: this.position.y+1, x: this.position.x-2});
                }
            }
            if (this.chessboard[this.position.y-1] && this.chessboard[this.position.y-1][this.position.x+2] === null) {
                this.moviesForFigure.push({y: this.position.y-1, x: this.position.x+2})
            }
            if (this.chessboard[this.position.y-1] && this.chessboard[this.position.y-1][this.position.x+2]) {
                this.underProtection.push({y: this.position.y-1, x: this.position.x+2}) // underProtectionTest
                if (this.chessboard[this.position.y-1][this.position.x+2].color === this.color) {
                } else {
                    this.moviesForFigure.push({y: this.position.y-1, x: this.position.x+2});
                }
            }
            if (this.chessboard[this.position.y-1] && this.chessboard[this.position.y-1][this.position.x-2] === null) {
                this.moviesForFigure.push({y: this.position.y-1, x: this.position.x-2})
            }
            if (this.chessboard[this.position.y-1] && this.chessboard[this.position.y-1][this.position.x-2]) {
                this.underProtection.push({y: this.position.y-1, x: this.position.x-2}) // underProtectionTest
                if (this.chessboard[this.position.y-1][this.position.x-2].color === this.color) {
                } else {
                    this.moviesForFigure.push({y: this.position.y-1, x: this.position.x-2});
                }
            }
        return this.moviesForFigure;
    }
    constructor(color: boolean, position: Position, chessboard: any, underProtection: any) {
        super()
        if (color) {
            this.image_src = '../../../assets/icons/white_knight.png'
        } else {
            this.image_src = '../../../assets/icons/black_knight.png'
        }
        this.color = color;
        this.position = position;
        this.chessboard = chessboard;
        this.underProtection = underProtection;
    }
}