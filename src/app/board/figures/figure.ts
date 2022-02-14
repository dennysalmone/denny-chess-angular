export interface Figure {
    color: string;
    figureType: string;
    position: string;
    possibleMoves(): any[];
}