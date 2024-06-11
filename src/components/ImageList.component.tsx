import React from "react";
import { ClockIcon } from "@heroicons/react/16/solid";

interface Image {
    src: string;
    alt: string;
    title: string;
    description: string;
    totalDuration: number;
}

interface ImageListProps {
    images: Image[];
}

export default function ImageList({ images }: ImageListProps) {

    return (
        <>
            {images.map((image, index) => (
                <div className="image-list" key={index}>
                    <img src={image.src} alt={image.alt} />
                    <h2>{image.title}</h2>
                    <p>{image.description}</p>
                    <p><ClockIcon className="w-3 h-3 mr-1" />{image.totalDuration} min</p>
                </div>
            ))}
        </>
    );
}
