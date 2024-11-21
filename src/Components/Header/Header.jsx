import { useState } from "react"; 
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo 2-1.png";
import { HeaderContainer } from "./Comoponents/Header/style";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <HeaderContainer>
      <div className="headerBox">
        <figure>
          <img src={logo} alt="Logomarca Starbucks" />
        </figure>
        <nav>
          <ul className="navLinks">
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/novidades">Novidades</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre Nós</Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderContainer>
  );
}
