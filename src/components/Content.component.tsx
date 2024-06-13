'use client'
import React, { useRef } from "react";
import Title from "./Title.component";
import Card from "./Card.component";
import ImageList from "./ImageList.component";
import Images from "../service/Images.json"
import TrendingWeek from "./TrendingWeek.component";
import TabContent from "./Tab.component";
import ScrollArrows from "@/utils/ScrollArrows";
import { BriefcaseIcon, HeartIcon, SparklesIcon } from "@heroicons/react/20/solid";

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

                <Card height="35vh" width="21%">
                    <div className="card-trending-week">
                        <h1>Destaques da Semana</h1>
                        <TrendingWeek 
                            imageUrl="./img/gotan.jpg" 
                            title="Gotan Project" 
                            description="Banda de música eletrônica" 
                            totalDuration={60} 
                        />
                    </div>
                </Card> 
                <Card height="35vh" width="67%">
                    <div className="card-title-select" >
                        <Title>Destaques Podcasts em</Title>
                        <select className="select">
                            <option value="mpb">SciCast</option>
                            <option value="jazz">Educação</option>
                            <option value="rock">Business</option>
                            <option value="inspiracao">Inspiração</option>
                        </select>                    
                        
                <ScrollArrows onLeftClick={handleScrollLeft} onRightClick={handleScrollRight} />
                    </div>
                    <div className="content-image" ref={contentRef}>
                        <ImageList images={Images} />
                    </div>
                </Card> 
                <Card height="80vh" width="90%">
                    <Title>Podcasts Populares</Title>
                    <TabContent />
                    <div>
                        <hr />
                        <Title>Categorias Populares</Title>
                        <div className="flex justify-start">
                            <div className="images-icons">
                                <BriefcaseIcon className="w-8 h-8" />
                                <p>Business</p>
                                </div>
                                <div className="images-icons">

                                <SparklesIcon className="w-8 h-8" />
                                <p>SciCast</p>
                                </div>
                                <div className="images-icons">

                                <HeartIcon className="w-8 h-8" />
                                <p>Saúde</p>
                            </div>                        
                        </div>
                    </div>
                </Card>   
            </div>

            <div className="content-right">
                <Card height="45vh" width="300px">
                    <Title>Tocando Agora</Title>
                </Card> 
                <Card height="35vh" width="300px">
                    <Title>Tocados Recentemente</Title>
                </Card> 
            </div>

        </div>
    );
}
