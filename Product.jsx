import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "./CartContext";

function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    setError("");

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Product not found");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load product.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2 className="message">Loading Product...</h2>;
  }

  if (error) {
    return <h2 className="message">{error}</h2>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />

      <h1>{product.title}</h1>

      <h2>${product.price}</h2>

      <p>{product.description}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
