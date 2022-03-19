export interface Figure {
    color: boolean;
    position: string;
    possibleMoves(): any;
    name: string;
}

export class Pawn implements Figure {
    color = true;
    name = 'Pawn';
    position = 'null';
    possibleMoves() {
        return this
    }
    constructor(arg: number) {
        this.temp = arg + 5
    }
    temp: number
}