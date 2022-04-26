export function getStraightMoves (this: any) {
    this.moviesForFigure = []
    for (let i=1; i<8; i++) {
        if (this.chessboard[this.position.y][this.position.x-i] === null) {
            this.moviesForFigure.push({y: this.position.y, x: this.position.x-i})
        }
        if (this.chessboard[this.position.y][this.position.x-i]) {
            if (this.chessboard[this.position.y][this.position.x-i].color === this.color) {
                break;
            } else {
                this.moviesForFigure.push({y: this.position.y, x: this.position.x-i});
                break;
            }
        }
    }
    for (let i=1; i<8; i++) {
        if (this.chessboard[this.position.y][this.position.x+i] === null) {
            this.moviesForFigure.push({y: this.position.y, x: this.position.x+i})
        }
        if (this.chessboard[this.position.y][this.position.x+i]) {
            if (this.chessboard[this.position.y][this.position.x+i].color === this.color) {
                break;
            } else {
                this.moviesForFigure.push({y: this.position.y, x: this.position.x+i});
                break;
            }
        }
    }
    for (let i=1; i<8; i++) {
        if (this.chessboard[this.position.y+i] && this.chessboard[this.position.y+i][this.position.x] === null) {
            this.moviesForFigure.push({y: this.position.y+i, x: this.position.x})
        }
        if (this.chessboard[this.position.y+i] && this.chessboard[this.position.y+i][this.position.x]) {
            if (this.chessboard[this.position.y+i][this.position.x].color === this.color) {
                break;
            } else {
                this.moviesForFigure.push({y: this.position.y+i, x: this.position.x});
                break;
            }
        }
    }
    for (let i=1; i<8; i++) {
        if (this.chessboard[this.position.y-i] && this.chessboard[this.position.y-i][this.position.x] === null) {
            this.moviesForFigure.push({y: this.position.y-i, x: this.position.x})
        }
        if (this.chessboard[this.position.y-i] && this.chessboard[this.position.y-i][this.position.x]) {
            if (this.chessboard[this.position.y-i][this.position.x].color === this.color) {
                break;
            } else {
                this.moviesForFigure.push({y: this.position.y-i, x: this.position.x});
                break;
            }
        }
    }
    return this.moviesForFigure;
}