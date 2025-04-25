import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CategoryPage() {
  const { categoryName } = useParams(); // URL parametresinden kategori adını al
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data)); // Kategoriye ait ürünleri çek
  }, [categoryName]);

  return (
    <div>
      <h2>{categoryName.toUpperCase()}</h2> {/* Kategori ismi */}
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
