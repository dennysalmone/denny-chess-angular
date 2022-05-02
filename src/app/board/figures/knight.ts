import {Figure} from '../figures/figure';
import {Position} from '../positions.moves/position'
import {AbstractFigure} from '../figures/figure'
import {PositionArray} from '../positions.moves/types';
import {getLTypeMoves} from '../positions.moves/moves';

export class Knight extends AbstractFigure implements Figure  {
    name = 'Knight';
    possibleMoves(isUnderAttack: boolean): PositionArray {
        return getLTypeMoves (this, isUnderAttack)
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