import {Component, OnInit} from '@angular/core'
import {Figure} from './figures/figure';
import {Pawn} from './figures/pawn';
import {Rook} from './figures/rook';
import {King} from './figures/king';
import {Bishop} from './figures/bishop';
import {Queen} from './figures/queen';
import {Knight} from './figures/knight';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})

export class BoardComponent {
    boardLength: number = 8;
    chessboard: (null | Figure)[][] = [];
    turn: boolean = true;
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
    clickOnFigure(figure: Figure) {
        for (let y=0; y<8; y++) {
            for (let x=0; x<8; x++) {
                if (this.chessboard[y][x] === figure) {
                    console.log(this.chessboard[y][x])
                    if (this.turn === (figure as Figure).color && !figure.choised) {
                            figure.choised = true;
                            figure.possibleMoves()
                            for (let y=0; y<8; y++) {
                                for (let x=0; x<8; x++) {    
                                    if (this.chessboard[y][x] && this.chessboard[y][x] !== figure) { 
                                        (this.chessboard[y][x] as Figure).choised = false;


                                    }
                                }
                            }
                    }
                    // return (this.chessboard[y][x] as Figure).possibleMoves()
                }
            }
        }
        return;
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
    clickCell(x: number, y: number) {
        console.log(x, y)
    }

}




