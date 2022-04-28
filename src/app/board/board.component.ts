import {Component, OnInit} from '@angular/core'
import {Figure} from './figures/figure';
import {Pawn} from './figures/pawn';
import {Rook} from './figures/rook';
import {King} from './figures/king';
import {Bishop} from './figures/bishop';
import {Queen} from './figures/queen';
import {Knight} from './figures/knight';
import {Position} from "./positions.moves/position";
import {getStraightMoves} from './positions.moves/moves';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})

export class BoardComponent {
    boardLength: number = 8;
    chessboard: (null | Figure)[][] = [];
    turn: boolean = true;
    selectedFigure: Figure | null = null;
    bcPossibleMoves = [];
    // underAttack: Position[] = this.checkCellsUnderAttack ()
    // kingUnderShah: boolean = false;

    ngOnInit () {
        this.createBoard ()
        this.createFigures ()
    }

    createFigures () {
        for (let j=0; j<8; j++) {
            this.chessboard[6][j] = new Pawn (true, {y:6, x:j}, this.chessboard);
        }
        for (let j=0; j<8; j++) {
            this.chessboard[1][j] = new Pawn (false, {y:1, x:j}, this.chessboard);
        }
        this.chessboard[7][0] = new Rook (true, {y:7, x:0}, this.chessboard);
        this.chessboard[7][7] = new Rook (true, {y:7, x:7}, this.chessboard);
        this.chessboard[0][0] = new Rook (false, {y:0, x:0}, this.chessboard);
        this.chessboard[0][7] = new Rook (false, {y:0, x:7}, this.chessboard);
        this.chessboard[7][1] = new Knight (true, {y:7, x:1}, this.chessboard);
        this.chessboard[7][6] = new Knight (true, {y:7, x:6}, this.chessboard);
        this.chessboard[0][1] = new Knight (false, {y:0, x:1}, this.chessboard);
        this.chessboard[0][6] = new Knight (false, {y:0, x:6}, this.chessboard);
        this.chessboard[7][2] = new Bishop (true, {y:7, x:2}, this.chessboard);
        this.chessboard[7][5] = new Bishop (true, {y:7, x:5}, this.chessboard);
        this.chessboard[0][2] = new Bishop (false, {y:0, x:2}, this.chessboard);
        this.chessboard[0][5] = new Bishop (false, {y:0, x:5}, this.chessboard);
        this.chessboard[7][4] = new King (true, {y:7, x:4}, this.chessboard);
        this.chessboard[0][4] = new King (false, {y:0, x:4}, this.chessboard);
        this.chessboard[7][3] = new Queen (true, {y:7, x:3}, this.chessboard);
        this.chessboard[0][3] = new Queen (false, {y:0, x:3}, this.chessboard);
    }

    createBoard () {
        for (let i=0; i<8; i++) {
            this.chessboard.push([])
            for (let j=0; j<8; j++) {
                this.chessboard[i].push(null);
            }
        }
    }

    checkForMovie (bcPossibleMoves: any, position: Position) {
        for (let i=0; i<bcPossibleMoves.length; i++) {
            if (bcPossibleMoves[i].x === position.x && bcPossibleMoves[i].y === position.y) {
                return true;
            }
        }
        return false;
    }

    checkCellsUnderAttack (): Position[] {
        let cellsUnderAttack = [];
        for (let i=0; i<8; i++) {
            for (let j=0; j<8; j++) {
                if (this.chessboard[i][j]?.color === !this.turn && (this.chessboard[i][j] as Pawn).isPawn) {
                    cellsUnderAttack.push((this.chessboard[i][j] as Pawn).possibleAttackPawn())
                } else if (this.chessboard[i][j]?.color === !this.turn) {
                    cellsUnderAttack.push(this.chessboard[i][j]?.possibleMoves(true))
                }
            }
        }
        console.log(Array.from([...cellsUnderAttack.flat()]))
        return Array.from([...cellsUnderAttack.flat()]);
    }

    clickOnFigure(figure: (Figure | null), position: Position): void {
        if (this.selectedFigure === figure) {
            // this.checkCellsUnderAttack ()
            this.bcPossibleMoves = [];
            this.figureUnselect ()
            return;
        }
        if(figure && figure.color === this.turn) {
            // this.checkCellsUnderAttack ()
            this.selectedFigure = figure;
            if (figure !== null) {this.bcPossibleMoves = figure?.possibleMoves(false)}
            return;
        }
        if(this.selectedFigure && this.checkForMovie(this.bcPossibleMoves, position)) {
            const prevPos = this.selectedFigure.position;
            this.chessboard[prevPos.y][prevPos.x] = null;
            this.chessboard[position.y][position.x] = this.selectedFigure
            this.selectedFigure.position = position;
            this.kingOrRookHadMove (this.chessboard[position.y][position.x] as Figure);
            this.onTurnChange()
            this.pawnPromotionCheck()
            this.isKingUnderShah ()
            return;
        }
    }

    figureUnselect () {
        this.selectedFigure = null;
    }

    kingOrRookHadMove (figure: Figure) {
        if ((figure as King) && (figure as King).kingNotMove) {
            (figure as King).kingNotMove = false;
        }
        if ((figure as Rook) && (figure as Rook).rookNotMove) {
            (figure as Rook).rookNotMove = false;
        }
    }
    
    pawnPromotionCheck() {
        for (let i=0; i<8; i++) {
            if (this.chessboard[0][i] && (this.chessboard[0][i] as Pawn).isPawn) {
                this.chessboard[0][i] = null;
                this.chessboard[0][i] = new Queen (true, {y:0, x:i}, this.chessboard);
            }
            if (this.chessboard[7][i] && (this.chessboard[7][i] as Pawn).isPawn) {
                this.chessboard[7][i] = null;
                this.chessboard[7][i] = new Queen (false, {y:7, x:i}, this.chessboard);
            }
        } 
    }
    
    foundKing (): Position {
        let flattedChessboard = this.chessboard.flat()
        let kingFigure = (flattedChessboard.filter(el => (el && (el as King).isKing && el.color === this.turn)))[0]; //king.color similar to turn
        return {y: (kingFigure as Figure).position.y, x: (kingFigure as Figure).position.x};        
    }

    isKingUnderShah (): boolean {
        let cellsUnderAttack = this.checkCellsUnderAttack ()
        let kingPos = this.foundKing ()
        let result = cellsUnderAttack.some(el => el.y === kingPos.y && el.x === kingPos.x)

        console.log(result)
        return result;
    }

    onTurnChange(): void {
        this.bcPossibleMoves = [];
        this.selectedFigure = null;
        this.turn = !this.turn
    }

    isCellPossibleMoves(position: Position) {
        const ifPossible: boolean = this.bcPossibleMoves.some((posPos: {y: number, x: number}) => (posPos.x === position.x) && (posPos.y === position.y))
        if (ifPossible) {
            return '#883838';
        } else {
            return (position.x + position.y) % 2 ? '#383838' : 'wheat';
        }
    }
}




