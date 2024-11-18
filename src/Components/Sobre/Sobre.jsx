import coffeeImage from "../../assets/images/Loja.png";
import { StyledNewsSection } from "./style";

export default function CoffeeHighlights() {
    return (
        <StyledNewsSection>
            <div className="newsText">
                <h3>CAFÉS PREMIUM</h3>
                <h2>Tipos de Torrefação</h2>
                <p>
                    A torrefação do café pode ser classificada em três tipos principais:
               
                    <strong>Torra Clara:</strong> Realça os sabores originais do grão, com notas frutadas e alta acidez. Ideal para cafés especiais.
                 
                    <strong>Torra Média:</strong> Apresenta um equilíbrio entre acidez e amargor, com notas de caramelo e chocolate. É uma das preferidas entre os consumidores.
                 
                    <strong>Torra Escura:</strong> Intensifica o amargor e traz um sabor encorpado, com notas de chocolate amargo e nozes, além de acidez reduzida.
                  
                    Escolher o nível ideal depende do seu gosto e da experiência que deseja ao saborear o café.
                </p>
                <button>Descubra Mais</button>
            </div>
            <div className="coffeeImageBox">
                <img src={coffeeImage} alt="Grãos de café torrados em fundo neutro" />
            </div>
        </StyledNewsSection>
    );
}
