import { useState, useEffect } from "react";

function Task() {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://fakestoreapi.com/products/');
        const data = await response.json();
        setProducts(data);
        setDisplayedProducts(data);
      } catch (error) {
        console.error("Fetch Failed", error);
      }
    }
    fetchData();
  }, []);

  const filterProducts = (type) => {
    if (type === "men's clothing") {
      setDisplayedProducts(products.filter((p) => p.category === "men's clothing"));
    } else if (type === "women's clothing") {
      setDisplayedProducts(products.filter((p) => p.category === "women's clothing"));
    } else if (type === "jewelery") {
      setDisplayedProducts(products.filter((p) => p.category === "jewelery"));
    } else if (type === "electronics") {
      setDisplayedProducts(products.filter((p) => p.category === "electronics"));
    }
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        Filter Products
      </button>

      <ul className="dropdown-menu">
        <li>
          <button className="dropdown-item" onClick={() => filterProducts("men's clothing")}>
            men's clothing
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => filterProducts("women's clothing")}>
            women's clothing
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => filterProducts("jewelery")}>
            jewelery
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => filterProducts("electronics")}>
            electronics
          </button>
        </li>
      </ul>

      <div className="product-list d-flex flex-wrap gap-5 mt-5 p-5">
        {displayedProducts.length === 0 && <p>Loading products...</p>}
        {displayedProducts.map(product => (
          <div key={product.id} className="card" style={{ width: "15rem" }}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
              style={{ height: "150px", objectFit: "contain" }}
            />
            <div className="card-body">
              <h6 className="card-title">{product.title}</h6>
              <p className="card-text">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task;
