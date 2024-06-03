import React, { ReactNode } from "react";

interface TitleProps {
    children: ReactNode;
}

export default function Title({ children }: TitleProps) {
    return (
        <div className="title">{children}</div>
    );
}