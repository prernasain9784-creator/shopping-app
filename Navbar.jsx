import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function Navbar() {
  const { cartCount, isLoggedIn, setIsLoggedIn } = useCart();

  return (
    <nav className="navbar">
      <h2>Forma.</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart ({cartCount})</Link>

        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
