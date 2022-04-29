import { Figure } from "../figures/figure";
import { Position } from "./position";

export type Chessboard = (null | Figure)[][]; 
export type Cell = Figure | null; 
export type PositionArray = Position[];