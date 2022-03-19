import {Component, OnInit} from '@angular/core'
import {Pawn} from './figures/figure';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})

export class BoardComponent {
    boardLength: number = 8;
    chessboard: any[] = [];
    ngOnInit () {
        this.createBoard ()
        this.createFigures ()
    }
    createBoard () {
        for (let i=0; i< this.boardLength; i++) {
            this.chessboard.push([])
            for (let j=0; j< this.boardLength; j++) {
                this.chessboard[i].push(null)
            }
        }
    }
    createFigures () {
        // for (let j=0; j< this.boardLength; j++) {
        //     this.chessboard[1][j] = 'white pawn'
        // }
        for (let j=0; j< this.boardLength; j++) {
            this.chessboard[6][j] = new Pawn (j);
        }
    }
    clickCell(cell: String) {
        console.log(this.chessboard)
    }

}




