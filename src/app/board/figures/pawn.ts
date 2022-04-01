import {Figure} from '../figures/figure';
import {Position} from '../positions.moves/position'
import {AbstractFigure} from '../figures/figure'

export class Pawn extends AbstractFigure implements Figure  {
    name = 'Pawn';
    possibleMoves() {
        return this
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