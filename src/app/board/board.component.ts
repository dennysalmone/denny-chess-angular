import {Component, OnInit} from '@angular/core'
import {Figure} from './figures/figure';
import {Pawn} from './figures/pawn';
import {Rook} from './figures/rook';
import {King} from './figures/king';
import {Bishop} from './figures/bishop';
import {Queen} from './figures/queen';
import {Knight} from './figures/knight';
import {Position} from "./positions.moves/position";

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
    underProtection: any = [];
    bcPossibleMoves = [];

    ngOnInit () {
        this.createBoard ()
        this.createFigures ()
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

    checkCellsUnderAttack () {
        this.underProtection.length = 0
        let cellsUnderAttack = [];
        for (let i=0; i<8; i++) {
            for (let j=0; j<8; j++) {
                if (this.chessboard[i][j]?.color === !this.turn) {
                    cellsUnderAttack.push(this.chessboard[i][j]?.possibleMoves())
                }
            }
        }
        console.log(this.underProtection, ' - cells under protection')
        return this.underProtection;
    }

    clickOnFigure(figure: (Figure | null), position: Position) {
        if (this.selectedFigure === figure) {
            this.checkCellsUnderAttack ()
            this.bcPossibleMoves = [];
            this.selectedFigure = null;
            return;
        }
        if(figure && figure.color === this.turn) {
            this.checkCellsUnderAttack ()
            this.selectedFigure = figure;
            if (figure !== null) {this.bcPossibleMoves = figure?.possibleMoves()}
            return;
        }
        if(this.selectedFigure && this.checkForMovie(this.bcPossibleMoves, position)) {
            const prevPos = this.selectedFigure.position;
            this.chessboard[prevPos.y][prevPos.x] = null;
            this.chessboard[position.y][position.x] = this.selectedFigure
            this.selectedFigure.position = position;
            this.bcPossibleMoves = [];
            this.selectedFigure = null;
            this.turn = !this.turn
            return;
        }
    }

    createFigures () {
        for (let j=0; j<8; j++) {
            this.chessboard[6][j] = new Pawn (true, {y:6, x:j}, this.chessboard, this.underProtection);
        }
        for (let j=0; j<8; j++) {
            this.chessboard[1][j] = new Pawn (false, {y:1, x:j}, this.chessboard, this.underProtection);
        }
        this.chessboard[7][0] = new Rook (true, {y:7, x:0}, this.chessboard, this.underProtection);
        this.chessboard[7][7] = new Rook (true, {y:7, x:7}, this.chessboard, this.underProtection);
        this.chessboard[0][0] = new Rook (false, {y:0, x:0}, this.chessboard, this.underProtection);
        this.chessboard[0][7] = new Rook (false, {y:0, x:7}, this.chessboard, this.underProtection);
        this.chessboard[7][1] = new Knight (true, {y:7, x:1}, this.chessboard, this.underProtection);
        this.chessboard[7][6] = new Knight (true, {y:7, x:6}, this.chessboard, this.underProtection);
        this.chessboard[0][1] = new Knight (false, {y:0, x:1}, this.chessboard, this.underProtection);
        this.chessboard[0][6] = new Knight (false, {y:0, x:6}, this.chessboard, this.underProtection);
        this.chessboard[7][2] = new Bishop (true, {y:7, x:2}, this.chessboard, this.underProtection);
        this.chessboard[7][5] = new Bishop (true, {y:7, x:5}, this.chessboard, this.underProtection);
        this.chessboard[0][2] = new Bishop (false, {y:0, x:2}, this.chessboard, this.underProtection);
        this.chessboard[0][5] = new Bishop (false, {y:0, x:5}, this.chessboard, this.underProtection);
        this.chessboard[7][4] = new King (true, {y:7, x:4}, this.chessboard, this.underProtection);
        this.chessboard[0][4] = new King (false, {y:0, x:4}, this.chessboard, this.underProtection);
        this.chessboard[7][3] = new Queen (true, {y:7, x:3}, this.chessboard, this.underProtection);
        this.chessboard[0][3] = new Queen (false, {y:0, x:3}, this.chessboard, this.underProtection);
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




