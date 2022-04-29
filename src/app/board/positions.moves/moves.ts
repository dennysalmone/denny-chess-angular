import { Figure } from "../figures/figure";
import { PositionArray } from "./types";

export function getStraightMoves (context: Figure, isUnderAttack: boolean): PositionArray {
    context.moviesForFigure = []
    // like a rook
    for (let i=1; i<8; i++) {
        if (context.chessboard[context.position.y][context.position.x-i] === null) {
            context.moviesForFigure.push({y: context.position.y, x: context.position.x-i})
        }
        if (context.chessboard[context.position.y][context.position.x-i]) {
            if ((context.chessboard[context.position.y][context.position.x-i] as Figure).color === context.color) {
                if(isUnderAttack) {
                    context.moviesForFigure.push({y: context.position.y, x: context.position.x-i});
                }
                break;
            } else {
                context.moviesForFigure.push({y: context.position.y, x: context.position.x-i});
                break;
            }
        }
    }
    for (let i=1; i<8; i++) {
        if (context.chessboard[context.position.y][context.position.x+i] === null) {
            context.moviesForFigure.push({y: context.position.y, x: context.position.x+i})
        }
        if (context.chessboard[context.position.y][context.position.x+i]) {
            if ((context.chessboard[context.position.y][context.position.x+i] as Figure).color === context.color) {
                if(isUnderAttack) {
                    context.moviesForFigure.push({y: context.position.y, x: context.position.x+i});
                }
                break;
            } else {
                context.moviesForFigure.push({y: context.position.y, x: context.position.x+i});
                break;
            }
        }
    }
    for (let i=1; i<8; i++) {
        if (context.chessboard[context.position.y+i] && context.chessboard[context.position.y+i][context.position.x] === null) {
            context.moviesForFigure.push({y: context.position.y+i, x: context.position.x})
        }
        if (context.chessboard[context.position.y+i] && context.chessboard[context.position.y+i][context.position.x]) {
            if ((context.chessboard[context.position.y+i][context.position.x] as Figure).color === context.color) {
                if(isUnderAttack) {
                    context.moviesForFigure.push({y: context.position.y+i, x: context.position.x});
                }
                break;
            } else {
                context.moviesForFigure.push({y: context.position.y+i, x: context.position.x});
                break;
            }
        }
    }
    for (let i=1; i<8; i++) {
        if (context.chessboard[context.position.y-i] && context.chessboard[context.position.y-i][context.position.x] === null) {
            context.moviesForFigure.push({y: context.position.y-i, x: context.position.x})
        }
        if (context.chessboard[context.position.y-i] && context.chessboard[context.position.y-i][context.position.x]) {
            if ((context.chessboard[context.position.y-i][context.position.x] as Figure).color === context.color) {
                if(isUnderAttack) {
                    context.moviesForFigure.push({y: context.position.y+i, x: context.position.x});
                }
                break;
            } else {
                context.moviesForFigure.push({y: context.position.y-i, x: context.position.x});
                break;
            }
        }
    } 
    return context.moviesForFigure;
}

export function getDiagonalMoves (context: Figure, isUnderAttack: boolean): PositionArray {
    context.moviesForFigure = []
    for (let i=1; i<8; i++) {
        if (context.chessboard[context.position.y+i] && context.chessboard[context.position.y+i][context.position.x-i] === null) {
            context.moviesForFigure.push({y: context.position.y+i, x: context.position.x-i})
        }
        if (context.chessboard[context.position.y+i] && context.chessboard[context.position.y+i][context.position.x-i]) {
            if ((context.chessboard[context.position.y+i][context.position.x-i] as Figure).color === context.color) {
                if(isUnderAttack) {
                    context.moviesForFigure.push({y: context.position.y+i, x: context.position.x-i});
                }
                break;
            } else {
                context.moviesForFigure.push({y: context.position.y+i, x: context.position.x-i});
                break;
            }
        }
    }
    for (let i=1; i<8; i++) {
        if (context.chessboard[context.position.y-i] && context.chessboard[context.position.y-i][context.position.x+i] === null) {
            context.moviesForFigure.push({y: context.position.y-i, x: context.position.x+i})
        }
        if (context.chessboard[context.position.y-i] && context.chessboard[context.position.y-i][context.position.x+i]) {
            if ((context.chessboard[context.position.y-i][context.position.x+i] as Figure).color === context.color) {
                if(isUnderAttack) {
                    context.moviesForFigure.push({y: context.position.y-i, x: context.position.x+i});
                }
                break;
            } else {
                context.moviesForFigure.push({y: context.position.y-i, x: context.position.x+i});
                break;
            }
        }
    }
    for (let i=1; i<8; i++) {
        if (context.chessboard[context.position.y+i] && context.chessboard[context.position.y+i][context.position.x+i] === null) {
            context.moviesForFigure.push({y: context.position.y+i, x: context.position.x+i})
        }
        if (context.chessboard[context.position.y+i] && context.chessboard[context.position.y+i][context.position.x+i]) {
            if ((context.chessboard[context.position.y+i][context.position.x+i] as Figure).color === context.color) {
                if(isUnderAttack) {
                    context.moviesForFigure.push({y: context.position.y+i, x: context.position.x+i});
                }
                break;
            } else {
                context.moviesForFigure.push({y: context.position.y+i, x: context.position.x+i});
                break;
            }
        }
    }
    for (let i=1; i<8; i++) {
        if (context.chessboard[context.position.y-i] && context.chessboard[context.position.y-i][context.position.x-i] === null) {
            context.moviesForFigure.push({y: context.position.y-i, x: context.position.x-i})
        }
        if (context.chessboard[context.position.y-i] && context.chessboard[context.position.y-i][context.position.x-i]) {
            if ((context.chessboard[context.position.y-i][context.position.x-i] as Figure).color === context.color) {
                if(isUnderAttack) {
                    context.moviesForFigure.push({y: context.position.y-i, x: context.position.x-i});
                }
                break;
            } else {
                context.moviesForFigure.push({y: context.position.y-i, x: context.position.x-i});
                break;
            }
        }
    }
    return context.moviesForFigure;
}