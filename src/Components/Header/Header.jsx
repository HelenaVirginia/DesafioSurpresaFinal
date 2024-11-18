import { Link } from "react-router-dom";
import logo from "../../assets/images/logo 2-1.png";
import { HeaderContainer } from "./Style";

const Header = () => {
    return (
        <HeaderContainer>
            <div className="headerBox">
                <figure>
                    <img src={logo} alt="Logomarca Starbucks" />
                </figure>
                <nav>
                    <ul className="navLinks">
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/novidades">Novidades</Link></li>
                        <li><Link to="/sobre">Sobre Nós</Link></li>
                    </ul>
                </nav>
            </div>
        </HeaderContainer>
    );
};

export default Header;
