import React, { ReactNode } from "react";

interface TitleProps {
    children: ReactNode;
    className?: string;
}

export default function Title({ children, className }: TitleProps) {
    return (
        <div className={className ? className : "title-left"}>{children}</div>
    );
}