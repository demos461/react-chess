import React, {FC} from 'react';
import {Figure} from "../models/figures/Figure";

interface LostFiguresProps {
    title: string;
    figures: Figure[]
}

export const LostFigures: FC<LostFiguresProps> = ({title, figures}) => {
    return (
        <div className='lost'>
            <div>{title}</div>
            {figures.map(figure =>
                <div key={figure.id}>
                    {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo} alt="figure"/>}
                </div>)}
        </div>
    );
};
