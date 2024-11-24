import * as S from "./style";
import lojaImage from "../../assets/images/Loja.png";

export default function Sobre() {
  return (
    <S.Sobre>
      <div className="content">
        <div className="imageWrapper">
          <img src={lojaImage} alt="Interior de uma loja Starbucks" />
        </div>
        <div className="textContent">
          <h2>Descubra o Processo</h2>
          <h1>Níveis de Torrefação Starbucks</h1>
          <p>
            Já escolheu seu tipo de torra favorito? Na Starbucks® oferecemos três
            níveis: Torra Clara, Média e Escura. Cada um com seu sabor e
            características únicas para todos os gostos.
          </p>
          <button className="exploreButton">Explorar Mais</button>
        </div>
        

      </div>
    </S.Sobre>
  );
}
