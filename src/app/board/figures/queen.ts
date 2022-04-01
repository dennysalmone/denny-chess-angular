import {Figure} from '../figures/figure';
import {Position} from '../positions.moves/position'
import {AbstractFigure} from '../figures/figure'

export class Queen extends AbstractFigure implements Figure  {
    name = 'Queen';
    possibleMoves() {
        return this
    }
    constructor(color: boolean, position: Position, chessboard: any) {
        super();
        if (color) {
            this.image_src = '../../../assets/icons/white_queen.png'
        } else {
            this.image_src = '../../../assets/icons/black_queen.png'
        }
        this.color = color;
        this.position = position;
        this.chessboard = chessboard;
    }
}