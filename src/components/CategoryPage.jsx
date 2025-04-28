import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/slices/basketSlice";
import "../css/CategoryPage.css";

function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Bir hata oluştu, lütfen tekrar deneyin.");
        setLoading(false);
      });
  }, [categoryName]);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleAddToBasket = (product) => {
    const payload = {
      id: product.id,
      price: product.price,
      image: product.image,
      title: product.title,
      description: product.description,
      count: 1,
    };

    dispatch(addToBasket(payload));
  };

  const handleViewDetails = (productId) => {
    navigate(`/product-details/${productId}`);
  };

  return (
    <div>
      <h2 className="category-title">{categoryName.toUpperCase()}</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
            <button
              className="product-button"
              onClick={() => handleAddToBasket(product)}
            >
              Sepete Ekle
            </button>
            <button
              className="product-button"
              onClick={() => handleViewDetails(product.id)}
            >
              Detaya Git
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
