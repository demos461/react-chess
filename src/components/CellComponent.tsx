import React, {FC} from 'react';
import {Cell} from "../models/Cell";

interface CellProps {
    cell: Cell;
    isSelected: boolean;
    onCellClick: (cell: Cell) => void;

}

export const CellComponent: FC<CellProps> = ({cell, isSelected, onCellClick}) => {
    return (
        <div
            className={['cell', cell.color, isSelected ? 'selected' : ''].join(' ')}
            onClick={() => onCellClick(cell)}
            style={{background: cell.available && cell.figure ? 'green' : ''}}
        >
            {cell.available && !cell.figure && <div className={'available'} />}
            {cell.figure?.logo && <img src={cell.figure.logo} alt="figure"/>}
        </div>
    );
};

