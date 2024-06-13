import { PlayIcon } from "@heroicons/react/24/outline";
import React from "react";

interface PlayingNow {
    src: string;
    alt: string;
    title: string;
    description: string;
    totalDuration: number;
};
interface PlayingNowProps {
    playingNow: PlayingNow[];
}

export default function PlayingNow ({ playingNow }: PlayingNowProps) {
    return (
        <>
            {playingNow.map((el, index) => (
                <div className="play-now" key={index}>
                    <img src={el.src} alt={el.alt} />
                    <h2>{el.title}</h2>
                    <p>{el.description}</p>
                    <p>
                        <PlayIcon className="m-5 h-5 transform rotate-180" />
                        <PlayIcon className="m-5 h-5 fill-current text-black" />
                        <PlayIcon className="m-5 h-5" />
                    </p>
                </div>
            ))}
        </>
    );
}