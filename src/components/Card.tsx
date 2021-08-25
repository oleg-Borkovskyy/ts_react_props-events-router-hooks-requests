import React, { FC } from 'react';
export enum CardVariant {
    outline='outline',
    primary='primary'
}

interface CardProps {
    width?:string;
    height?:string;
    variant:CardVariant,
}
const Card: FC<CardProps> = ({width,height,children,variant} ) => {
    return (
        <div style={{
            width,
            height,
            border:variant===CardVariant.outline ? '1px solid gray':'none',
            background: variant=== CardVariant.primary?'lightgray':''
            }}>
            {children}
        </div>
    );
};

export default Card;