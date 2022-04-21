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
    bcPossibleMoves: any;
    possibleCells: any = [];
    ngOnInit () {
        this.createBoard ()
        this.createFigures ()
    }
    createBoard () {
        for (let i=0; i<8; i++) {
            this.chessboard.push([])
            for (let j=0; j<8; j++) {
                this.chessboard[i].push(null)
            }
        }
    }
    clickOnFigure(figure: Figure | null, position: Position) {
        let checkForMovie = function (bcPossibleMoves: any, position: Position) {
            for (let i=0; i<bcPossibleMoves.length; i++) {
                if (bcPossibleMoves[i].x === position.x && bcPossibleMoves[i].y === position.y) {
                    return true
                }
            }
            return false;
        }
        if(figure && figure.color === this.turn) {
            this.selectedFigure = figure;
            if (figure !== null) {this.bcPossibleMoves = figure?.possibleMoves()}
            console.log(this.bcPossibleMoves, 'bcPossibleMoves')
            this.possibleCells = []
            for (let k=0;k<this.bcPossibleMoves.length;k++) {
                this.possibleCells[k] = this.chessboard[this.bcPossibleMoves[k].y][this.bcPossibleMoves[k].x]
            }
            console.log(this.possibleCells)
        }
        if(this.selectedFigure && checkForMovie(this.bcPossibleMoves, position)) {
            this.possibleCells = []
            const prevPos = this.selectedFigure.position;
            this.chessboard[prevPos.y][prevPos.x] = null;
            this.chessboard[position.y][position.x] = this.selectedFigure
            this.selectedFigure.position = position;
            this.selectedFigure = null;
        }
    }

    createFigures () {
        for (let j=0; j<8; j++) {
            this.chessboard[6][j] = new Pawn (true, {y:6, x:j}, this.chessboard);
        }
        for (let j=0; j<8; j++) {
            this.chessboard[1][j] = new Pawn (false, {y:1, x:j}, this.chessboard);
        }
        this.chessboard[5][2] = new Rook (false, {y:7, x:0}, this.chessboard); //test
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
    clickCell(x: number, y: number) {
        console.log(x, y)
    }

}




