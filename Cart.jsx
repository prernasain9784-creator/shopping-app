import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice
  } = useCart();

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div>
              <h3>{item.title}</h3>

              <p>Price: ${item.price}</p>

              <div className="quantity">
                <button onClick={() => decreaseQuantity(item.id)}>
                  -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQuantity(item.id)}>
                  +
                </button>
              </div>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>

      {cart.length > 0 && (
        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link>
      )}
    </div>
  );
}

export default Cart;
