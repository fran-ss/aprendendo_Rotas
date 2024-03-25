import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import Logo from "../imagem/Logo.png";

export function Header() {
    return (
        <header>
            <div id="content">
                <div id="pt1">
                    <Link to="/"><img src={Logo} alt="Logo"/></Link>

                    <nav>
                        <ul>
                            <li><Link to="/vector">Vector</Link></li>
                            <li><Link to="/photos">Photos</Link></li>
                            <li><Link to="/psd">Psd</Link></li>
                            <li><Link to="/videos">Videos</Link></li>
                        </ul>
                    </nav>
                </div>
                <button>Submit</button>
            </div>
        </header>
    );
}
