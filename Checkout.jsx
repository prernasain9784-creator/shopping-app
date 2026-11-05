import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const navigate = useNavigate();

  function handleOrder() {
    if (cart.length === 0) {
      return;
    }

    clearCart();
    setOrderPlaced(true);
  }

  if (orderPlaced) {
    return (
      <div className="checkout">
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for shopping with Forma.</p>

        <button onClick={() => navigate("/shop")}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h1>Checkout</h1>

      <h2>Your Order</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <p>{item.title}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}

          <h2>Total: ${totalPrice.toFixed(2)}</h2>

          <button onClick={handleOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Checkout;