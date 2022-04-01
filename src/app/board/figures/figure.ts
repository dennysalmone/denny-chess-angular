export interface Figure {
    color: boolean;
    position: any;
    name: string;
    image_src: string;
    possibleMoves(): any;
    chessboard: any;
    choised: boolean;
}

export abstract class AbstractFigure {
    color = true;
    position = {x:25, y:25};
    image_src = 'null';
    chessboard = 0;
    choised = false;
}