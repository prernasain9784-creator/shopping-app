import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Forma Store</h1>

      <p>Discover amazing products at amazing prices.</p>

      <Link to="/shop">
        <button>Explore Products</button>
      </Link>
    </div>
  );
}

export default Home;