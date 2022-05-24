import React, {FC, useEffect, useRef, useState} from 'react';
import {Player} from "../models/Player";
import {Colors} from "../models/Colors";

interface TimerProps {
    currentPlayer: Player | null;
    restart: () => void;

}

export const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
    const [blackTime, setBlackTime] = useState(10);
    const [whiteTime, setWhiteTime] = useState(10);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)

    function startTimer() {
        if (timer.current) {
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
        timer.current = setInterval(callback, 1000)
    }

    function decrementBlackTimer() {
        setBlackTime(prevState => prevState - 1)
    }

    function decrementWhiteTimer() {
        setWhiteTime(prevState => prevState - 1)
    }

    const handleRestart = () => {
        setWhiteTime(300)
        setBlackTime(300)
        restart();
    }

    useEffect(() => {
        startTimer()
    }, [currentPlayer])

    return (
        <div className='timer'>
            <div>

                <div className='btn' onClick={handleRestart}>Restart game</div>
            </div>
            <div>
                Black - {blackTime}
            </div>
            <div>
                White - {whiteTime}
            </div>

        </div>

    );
};
