import React from "react";
import "../css/Product.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/slices/basketSlice";

function Product({ product }) {
  const { id, price, image, title, description } = product;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addBasket = () => {
    const payload = {
      id,
      price,
      image,
      title,
      description,
      count: 1,
    };

    dispatch(addToBasket(payload));
  };

  return (
    <div className="card">
      <img className="image" src={image} alt={title} />
      <div>
        <p style={{ textAlign: "center", height: "50px" }}>{title}</p>
        <h3 style={{ textAlign: "center" }}>{price}₺</h3>
      </div>

      <div className="flex-row">
        <button
          onClick={() => navigate("/product-details/" + id)}
          className="detail-button"
        >
          Detayına Git
        </button>

        <button
          onClick={addBasket}
          className="add-to-basket-button"
          style={{
            padding: "10px",
            backgroundColor: "rgb(185, 76, 76)",
            color: "#fff",
            borderRadius: "5px",
            marginLeft: "10px",
          }}
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}

export default Product;
