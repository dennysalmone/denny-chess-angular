import {Component, OnInit} from '@angular/core'

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
    }
    createBoard () {
        for (let i=0; i< this.boardLength; i++) {
            this.chessboard.push([])
            for (let j=0; j< this.boardLength; j++) {
                this.chessboard[i].push(null)
            }
        }
    }
    clickCell(cell: String) {
        console.log(cell)
    }



    // increase($event : any) : void {
    //     this.count++;
    //     console.log($event);
    // }
}