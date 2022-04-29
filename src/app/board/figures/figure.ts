import { Position } from "../positions.moves/position";
import { Chessboard, PositionArray } from "../positions.moves/types";

export interface Figure {
    moviesForFigure: any;
    color: boolean;
    position: any;
    name: string;
    image_src: string;
    possibleMoves(arg: boolean): any;
    chessboard: Chessboard;
    choised: boolean;
}

export abstract class AbstractFigure {
    color = true;
    position = {x:25, y:25};
    image_src = 'null';
    chessboard: any = 0;
    choised = false;
    moviesForFigure: PositionArray = [];
    underProtection: any;
}