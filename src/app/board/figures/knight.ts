import {Figure} from '../figures/figure';
import {Position} from '../positions.moves/position'
import {AbstractFigure} from '../figures/figure'

export class Knight extends AbstractFigure implements Figure  {
    name = 'Knight';
    possibleMoves() {
        console.log(this.chessboard)
    }
    constructor(color: boolean, position: Position, chessboard: any) {
        super()
        if (color) {
            this.image_src = '../../../assets/icons/white_knight.png'
        } else {
            this.image_src = '../../../assets/icons/black_knight.png'
        }
        this.color = color;
        this.position = position;
        this.chessboard = chessboard;
    }
}