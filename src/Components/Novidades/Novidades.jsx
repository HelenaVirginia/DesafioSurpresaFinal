import * as S from "./style";
import torraoImg from "../../assets/images/Captura de tela 2024-11-10 205921 1.png";

export default function Novidades() {
  return (
    <S.Novidades>
      <div className="content">
        <div className="texto">
          <h2>Descubra</h2>
          <h1>Níveis de Torrefação</h1>
          <p>
            Prefere uma torra mais clara, média ou escura? Conheça os níveis de
            torrefação Starbucks® e escolha o que mais combina com o seu paladar.
          </p>
          <button className="saibaMais">Saiba Mais</button>
        </div>
        <div className="imageWrapper">
          <img src={torraoImg} alt="Grãos de café torrados" />
        </div>
      </div>
    </S.Novidades>
  );
}
