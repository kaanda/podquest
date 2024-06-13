'use client'
import React, { useRef } from "react";
import Title from "./Title.component";
import Card from "./Card.component";
import HighlightsList from "./HighlightsList.component";
import ImagesDestaques from "../service/Destaques.json";
import PlayNow from "../service/PlayNow.json";
import TrendingWeek from "./TrendingWeek.component";
import TabContent from "./Tab.component";
import ScrollArrows from "@/utils/ScrollArrows";
import PlayingNow from "./PlayingNow.component";

export default function Content() {

    const contentRef = useRef<HTMLDivElement>(null);

    const handleScrollLeft = () => {
        if (contentRef.current) {
            contentRef.current.scrollLeft -= 100; 
        }
    };
    
    const handleScrollRight = () => {
        if (contentRef.current) {
            contentRef.current.scrollLeft += 100; 
        }
    };

    return (
        <div className="content">
            <div className="content-left">
                <Card height="30vh" width="21%">
                    <div className="card-trending-week">
                        <h1>Destaques da Semana</h1>
                        <TrendingWeek 
                            imageUrl="./img/destaques/escafandro.png"
                            title="Gotan Project" 
                            description="Banda de música eletrônica" 
                            totalDuration={60} 
                        />
                    </div>
                </Card> 

                <Card height="30vh" width="67%">
                    <div className="card-title-select" >
                        <Title>Destaques Podcasts em</Title>
                        <select className="select">
                            <option value="todos">Todos</option>
                            <option value="scicast">SciCast</option>
                            <option value="educacao">Educação</option>
                            <option value="business">Business</option>
                            <option value="inspiracao">Inspiração</option>
                        </select>                 
                        <ScrollArrows onLeftClick={handleScrollLeft} onRightClick={handleScrollRight} />
                    </div>
                    <div className="content-image" ref={contentRef}>
                        <HighlightsList highlightsImages={ImagesDestaques} />
                    </div>
                </Card> 

                <Card height="40vh" width="93%">
                    <Title>Categorias Populares</Title>
                    <TabContent />                    
                </Card>

            </div>

            <div className="content-right">
                <Card height="40vh" width="300px">
                    <Title className="title-center">Tocando Agora</Title>
                    <PlayingNow playingNow={PlayNow} />
                </Card> 

                <Card height="30vh" width="300px">
                    <Title className="title-center">Tocados Recentemente</Title>
                </Card> 
            </div>
        </div>
    );
}
