import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import "../css/Categories.css";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setIsLoading(false);
      });
  }, []);

  const categoryData = {
    electronics: { icon: "📱", color: "#3b82f6" },
    jewelery: { icon: "💎", color: "#f59e0b" },
    "men's clothing": { icon: "👔", color: "#10b981" },
    "women's clothing": { icon: "👗", color: "#ec4899" },
  };

  return (
    <div className="modern-categories">
      <div className="categories-header">
        <h1>Ready to Explore?</h1>
        <p>Discover your favorite categories and meet unique products</p>
      </div>

      {isLoading ? (
        <div className="categories-loading">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="category-skeleton"></div>
          ))}
        </div>
      ) : (
        <div className="categories-grid">
          {categories.map((cat) => (
            <Link
              to={`/categories/${cat}`}
              key={cat}
              className="category-card"
              style={{
                "--category-color": categoryData[cat]?.color || "#6366f1",
              }}
            >
              <div className="category-icon">
                {categoryData[cat]?.icon || "🛍️"}
              </div>
              <div className="category-content">
                <h3>
                  {cat
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </h3>
                <span className="explore-link">
                  Explore <FiChevronRight />
                </span>
              </div>
              <div className="category-hover-effect"></div>
            </Link>
          ))}
        </div>
      )}

      <div className="categories-cta">
        <h2>Keep Getting Inspired</h2>
        <p>Follow us for new arrivals and exclusive collections</p>
        <button className="cta-button">See New Products</button>
      </div>
    </div>
  );
}

export default Categories;
