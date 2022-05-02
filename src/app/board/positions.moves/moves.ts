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

export function getLTypeMoves (context: Figure, isUnderAttack: boolean): PositionArray {
    context.moviesForFigure = []
    if (context.chessboard[context.position.y+2] && context.chessboard[context.position.y+2][context.position.x+1] === null) {
        context.moviesForFigure.push({y: context.position.y+2, x: context.position.x+1})
    }
    if (context.chessboard[context.position.y+2] && context.chessboard[context.position.y+2][context.position.x+1]) {
        if ((context.chessboard[context.position.y+2][context.position.x+1] as Figure).color === context.color) {
            if(isUnderAttack) {
                context.moviesForFigure.push({y: context.position.y+2, x: context.position.x+1});
            }
        } else {
            context.moviesForFigure.push({y: context.position.y+2, x: context.position.x+1});
        }
    }
    if (context.chessboard[context.position.y+2] && context.chessboard[context.position.y+2][context.position.x-1] === null) {
        context.moviesForFigure.push({y: context.position.y+2, x: context.position.x-1})
    }
    if (context.chessboard[context.position.y+2] && context.chessboard[context.position.y+2][context.position.x-1]) {
        if ((context.chessboard[context.position.y+2][context.position.x-1] as Figure).color === context.color) {
            if(isUnderAttack) {
                context.moviesForFigure.push({y: context.position.y+2, x: context.position.x-1});
            }
        } else {
            context.moviesForFigure.push({y: context.position.y+2, x: context.position.x-1});
        }
    }
    if (context.chessboard[context.position.y-2] && context.chessboard[context.position.y-2][context.position.x+1] === null) {
        context.moviesForFigure.push({y: context.position.y-2, x: context.position.x+1})
    }
    if (context.chessboard[context.position.y-2] && context.chessboard[context.position.y-2][context.position.x+1]) {
        if ((context.chessboard[context.position.y-2][context.position.x+1] as Figure).color === context.color) {
            if(isUnderAttack) {
                context.moviesForFigure.push({y: context.position.y-2, x: context.position.x+1});
            }
        } else {
            context.moviesForFigure.push({y: context.position.y-2, x: context.position.x+1});
        }
    }
    if (context.chessboard[context.position.y-2] && context.chessboard[context.position.y-2][context.position.x-1] === null) {
        context.moviesForFigure.push({y: context.position.y-2, x: context.position.x-1})
    }
    if (context.chessboard[context.position.y-2] && context.chessboard[context.position.y-2][context.position.x-1]) {
        if ((context.chessboard[context.position.y-2][context.position.x-1] as Figure).color === context.color) {
            if(isUnderAttack) {
                context.moviesForFigure.push({y: context.position.y-2, x: context.position.x-1});
            }
        } else {
            context.moviesForFigure.push({y: context.position.y-2, x: context.position.x-1});
        }
    }
    // 2 part
    if (context.chessboard[context.position.y+1] && context.chessboard[context.position.y+1][context.position.x+2] === null) {
        context.moviesForFigure.push({y: context.position.y+1, x: context.position.x+2})
    }
    if (context.chessboard[context.position.y+1] && context.chessboard[context.position.y+1][context.position.x+2]) {
        if ((context.chessboard[context.position.y+1][context.position.x+2] as Figure).color === context.color) {
            if(isUnderAttack) {
                context.moviesForFigure.push({y: context.position.y+1, x: context.position.x+2});
            }
        } else {
            context.moviesForFigure.push({y: context.position.y+1, x: context.position.x+2});
        }
    }
    if (context.chessboard[context.position.y+1] && context.chessboard[context.position.y+1][context.position.x-2] === null) {
        context.moviesForFigure.push({y: context.position.y+1, x: context.position.x-2})
    }
    if (context.chessboard[context.position.y+1] && context.chessboard[context.position.y+1][context.position.x-2]) {
        if ((context.chessboard[context.position.y+1][context.position.x-2] as Figure).color === context.color) {
            if(isUnderAttack) {
                context.moviesForFigure.push({y: context.position.y+1, x: context.position.x-2});
            }
        } else {
            context.moviesForFigure.push({y: context.position.y+1, x: context.position.x-2});
        }
    }
    if (context.chessboard[context.position.y-1] && context.chessboard[context.position.y-1][context.position.x+2] === null) {
        context.moviesForFigure.push({y: context.position.y-1, x: context.position.x+2})
    }
    if (context.chessboard[context.position.y-1] && context.chessboard[context.position.y-1][context.position.x+2]) {
        if ((context.chessboard[context.position.y-1][context.position.x+2] as Figure).color === context.color) {
            if(isUnderAttack) {
                context.moviesForFigure.push({y: context.position.y-1, x: context.position.x+2});
            }
        } else {
            context.moviesForFigure.push({y: context.position.y-1, x: context.position.x+2});
        }
    }
    if (context.chessboard[context.position.y-1] && context.chessboard[context.position.y-1][context.position.x-2] === null) {
        context.moviesForFigure.push({y: context.position.y-1, x: context.position.x-2})
    }
    if (context.chessboard[context.position.y-1] && context.chessboard[context.position.y-1][context.position.x-2]) {
        if ((context.chessboard[context.position.y-1][context.position.x-2] as Figure).color === context.color) {
            if(isUnderAttack) {
                context.moviesForFigure.push({y: context.position.y-1, x: context.position.x-2});
            }
        } else {
            context.moviesForFigure.push({y: context.position.y-1, x: context.position.x-2});
        }
    }
return context.moviesForFigure;
}