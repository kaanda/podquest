import React from "react";
import Title from "./Title.component";
import Card from "./Card.component";
import ImageList from "./ImageList.component";
import Images from "../service/Images.json"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import TrendingWeek from "./TrendingWeek.component";

export default function Content() {
    return (
        <div className="content">
            <div className="content-left">

                <Card height="40vh" width="31%">
                    <div className="card-trending-week">
                        <h1>Destaques da Semana</h1>
                        <TrendingWeek imageUrl="https://via.placeholder.com/300" />
                    </div>
                </Card> 
                <Card height="40vh" width="57%">
                    <div className="card-title-select">
                        <Title>Destaques Podcasts em</Title>
                        <select className="select">
                            <option value="mpb">MPB</option>
                            <option value="jazz">Jazz</option>
                            <option value="rock">Rock</option>
                            <option value="inspiracao">Inspiração</option>
                        </select>
                   
                        <div className="card-icons-arrow">
                            <p className="w-6 h-5 m-1 bg-custom-gray rounded">
                                <ChevronLeftIcon className="w-5 h-5" />
                            </p>
                            <p className="w-6 h-5 m-1 bg-custom-gray rounded">
                                <ChevronRightIcon className="w-5 h-5" />
                            </p>
                        </div>
                   
                    </div>
                    <ImageList images={Images} />
                </Card> 
                <Card height="45vh" width="90%">
                    <Title>Podcasts Populares</Title>
                </Card>   
            </div>

            <div className="content-right">
                <Card height="45vh" width="300px">
                    <Title>Tocando Agora</Title>
                </Card> 
                <Card height="40vh" width="300px">
                    <Title>Tocados Recentemente</Title>
                </Card> 
            </div>

        </div>
    );
}
