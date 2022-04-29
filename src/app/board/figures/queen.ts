import {Figure} from '../figures/figure';
import {Position} from '../positions.moves/position'
import {AbstractFigure} from '../figures/figure'
import {getDiagonalMoves, getStraightMoves } from '../positions.moves/moves';
import {PositionArray } from '../positions.moves/types';

export class Queen extends AbstractFigure implements Figure  {
    name = 'Queen';
    possibleMoves(isUnderAttack: boolean): PositionArray {
        return [...getDiagonalMoves (this, isUnderAttack), ...getStraightMoves (this, isUnderAttack)]
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