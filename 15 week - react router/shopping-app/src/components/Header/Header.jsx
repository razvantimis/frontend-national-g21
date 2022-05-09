import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;