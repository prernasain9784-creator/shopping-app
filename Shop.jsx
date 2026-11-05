import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong. Please try again.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="message">Loading products...</h2>;
  }

  if (error) {
    return <h2 className="message">{error}</h2>;
  }

  return (
    <div className="shop">
      <h1>Our Products</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />

            <h3>{product.title}</h3>

            <p>${product.price}</p>

            <Link to={`/product/${product.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;