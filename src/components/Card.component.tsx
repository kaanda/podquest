import React, { ReactNode } from "react";
import Title from "./Title.component";

interface CardProps {
    height: string;
    width: string;
    children: ReactNode;
}

export default function Card({height, width, children}: CardProps) {
    return (
        <div className="card" style={{height: height, width: width}} > 
            {children}
        </div>
    );
}