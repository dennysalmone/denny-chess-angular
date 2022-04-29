import {Figure} from '../figures/figure';
import {Position} from '../positions.moves/position'
import {AbstractFigure} from '../figures/figure'
import {PositionArray} from '../positions.moves/types';
import {getDiagonalMoves} from '../positions.moves/moves';

export class Bishop extends AbstractFigure implements Figure  {
    name = 'Bishop';
    possibleMoves(isUnderAttack: boolean): PositionArray {
        return getDiagonalMoves (this, isUnderAttack)
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
