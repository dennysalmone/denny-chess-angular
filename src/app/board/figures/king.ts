import {Figure} from '../figures/figure';
import {Position} from '../positions.moves/position'
import {AbstractFigure} from '../figures/figure'

export class King extends AbstractFigure implements Figure  {
    name = 'King';
    possibleMoves() {
        return this
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