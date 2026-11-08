import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "./CartContext";

function Login() {
  const { setIsLoggedIn } = useCart();

  const navigate = useNavigate();
  const location = useLocation();

  function handleLogin() {
    setIsLoggedIn(true);

    const destination = location.state?.from || "/checkout";

    navigate(destination, { replace: true });
  }

  return (
    <div className="login">
      <h1>Welcome Back</h1>

      <p>Login to continue shopping.</p>

      <button onClick={handleLogin}>
        Login as Guest
      </button>
    </div>
  );
}

export default Login;
