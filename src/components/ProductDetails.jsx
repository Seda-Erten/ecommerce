import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/slices/basketSlice";
import "../css/ProductDetails.css";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Bir hata oluştu, lütfen tekrar deneyin.");
        setLoading(false);
      });
  }, [productId]);

  const handleAddToBasket = () => {
    const payload = {
      id: product.id,
      price: product.price,
      image: product.image,
      title: product.title,
      description: product.description,
      count: quantity,
    };

    dispatch(addToBasket(payload));
  };

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="product-details-container">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>

      <div className="quantity-container">
        <button
          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          className="quantity-button"
        >
          -
        </button>
        <span className="quantity-text">{quantity}</span>
        <button
          onClick={() => setQuantity((prev) => prev + 1)}
          className="quantity-button"
        >
          +
        </button>
      </div>

      <button className="add-to-basket-button" onClick={handleAddToBasket}>
        Sepete Ekle
      </button>
    </div>
  );
}

export default ProductDetails;
