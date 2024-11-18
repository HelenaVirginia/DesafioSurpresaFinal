import copoAmarelo from "../../assets/images/copos/amarelo2x 1.png";
import copoVermelho from "../../assets/images/copos/vermelho2x 1.png";
import copoLaranja from "../../assets/images/copos/laranja2x 1 (1).png";
import miniAmarelo from "../../assets/images/copos/amarelo 1.png";
import miniVermelho from "../../assets/images/copos/vermelho 1.png";
import miniLaranja from "../../assets/images/copos/laranja2x 1.png";
import { useState } from "react";
import { StyledSection } from "./style";

export default function HomePage() {
    const backgroundGreen = "bg-green";
    const backgroundRed = "bg-red";
    const backgroundYellow = "bg-yellow";

    const [backgroundColor, setBackgroundColor] = useState(backgroundGreen);
    const [currentCup, setCurrentCup] = useState(copoAmarelo);

    const handleYellowClick = () => {
        setBackgroundColor(backgroundGreen);
        setCurrentCup(copoAmarelo);
    };

    const handleRedClick = () => {
        setBackgroundColor(backgroundRed);
        setCurrentCup(copoVermelho);
    };

    const handleWhiteClick = () => {
        setBackgroundColor(backgroundYellow);
        setCurrentCup(copoLaranja);
    };

    return (
        <StyledSection>
            <div className="mainHomeContent">
                <div className="homeText">
                    <h1> Muito mais que Café</h1>
                    <h2>Isso é <span>Starbucks</span></h2>
                    <p>
                        Descubra os sabores únicos da Starbucks, que vão desde clássicos como
                        Caffè Americano, Cappuccino e Espresso até sanduíches e doces
                        diferenciados para todos os gostos.
                    </p>
                    <button>Explore Mais</button>
                </div>
                <figure className="miniCups">
                    <img
                        src={miniAmarelo}
                        onClick={handleYellowClick}
                        alt="Mini copo amarelo com macchiato da Starbucks"
                    />
                    <img
                        src={miniVermelho}
                        onClick={handleRedClick}
                        alt="Mini copo vermelho com macchiato da Starbucks"
                    />
                    <img
                        src={miniLaranja}
                        onClick={handleWhiteClick}
                        alt="Mini copo branco com macchiato da Starbucks"
                    />
                </figure>
            </div>
            <div className={`${backgroundColor} colorCircles`}>
                <img src={currentCup} alt="Copo grande da Starbucks" />
            </div>
        </StyledSection>
    );
}
