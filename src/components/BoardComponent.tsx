import React, {FC, useEffect, useState} from 'react';
import {Board} from "../models/Board";
import {CellComponent} from "./CellComponent";
import {Cell} from "../models/Cell";
import {Player} from "../models/Player";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void
    currentPlayer: Player | null;
    swapPlayer: () => void;
}


export const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    function onCellClick(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            swapPlayer();
            setSelectedCell(null);
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell);
            }
        }
    }

    function highlightCells() {
        board.highlightCells(selectedCell);
        updateBoard();
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    useEffect(() => {
        highlightCells();
    }, [selectedCell])


    return (
        <div>
            <div>Current player: {currentPlayer?.color}</div>
            <div className='board'>
                {board.cells.map((row, i) =>
                    <React.Fragment key={i}>
                        {row.map((cell) =>
                            <CellComponent
                                key={cell.id}
                                cell={cell}
                                isSelected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                                onCellClick={onCellClick}
                            />
                        )}
                    </React.Fragment>
                )}
            </div>
        </div>

    );
};
