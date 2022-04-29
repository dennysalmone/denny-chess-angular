import {Figure} from '../figures/figure';
import {Position} from '../positions.moves/position'
import {AbstractFigure} from '../figures/figure'
import { getStraightMoves } from '../positions.moves/moves';
import { PositionArray } from '../positions.moves/types';

export class Rook extends AbstractFigure implements Figure  {
    name = 'Rook';
    rookNotMove = true;
    possibleMoves(isUnderAttack: boolean): PositionArray {
        return getStraightMoves (this, isUnderAttack)
    }
    constructor(color: boolean, position: Position, chessboard: any) {
        super();
        if (color) {
            this.image_src = '../../../assets/icons/white_rook.png'
        } else {
            this.image_src = '../../../assets/icons/black_rook.png'
        }
        this.color = color;
        this.position = position;
        this.chessboard = chessboard;
    }
}