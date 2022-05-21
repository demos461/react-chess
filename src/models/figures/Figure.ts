import {Colors} from "../Colors";
import logo from '../../assets/black-bishop.png'
import {Cell} from "../Cell";

export enum FigureNames {
    FIGURE = 'FIGURE',
    KING = 'KING',
    KNIGHT = 'KNIGHT',
    PAWN = 'PAWN',
    QUEEN = 'QUEEN',
    ROOK = 'ROOK',
    BISHOP = 'BISHOP',
}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;


    constructor(colors: Colors, cell: Cell) {
        this.color = colors;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }

    canMove(target: Cell): boolean {
        return true
    }

    moveFigure(target: Cell) {

    }
}