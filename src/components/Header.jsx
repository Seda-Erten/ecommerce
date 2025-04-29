import React, { useState } from "react";
import "../css/Header.css";
import { FiShoppingCart, FiMenu, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/slices/basketSlice";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((store) => store.basket);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "New Arrivals", path: "/new", highlight: true },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="modern-header">
      <div className="header-top-bar">
        <p>✨ Free shipping on orders over $50 | Limited time offer!</p>
      </div>

      <div className="header-container">
        <div className="logo-container" onClick={() => navigate("/")}>
          <img
            className="logo"
            src="./src/images/logo.png"
            alt="E Commerce Logo"
          />
          <p className="logo-text">Shopfinity</p>
        </div>

        <div className={`nav-container ${mobileMenuOpen ? "open" : ""}`}>
          <nav className="main-nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  className={`nav-item ${item.highlight ? "highlight" : ""}`}
                >
                  <a href={item.path} className="nav-link">
                    {item.name}
                    {item.highlight && (
                      <span className="highlight-pulse"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="search-actions-container">
            <div className="search-container">
              <FiSearch className="search-icon" />
              <input
                className="search-input"
                type="text"
                placeholder="Search for products..."
              />
            </div>

            <div className="actions-container">
              <Badge
                onClick={() => dispatch(setDrawer())}
                badgeContent={products.length}
                color="primary"
                className="cart-badge"
              >
                <button className="cart-button">
                  <FiShoppingCart />
                  <span className="cart-text">Cart</span>
                </button>
              </Badge>
            </div>
          </div>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FiMenu />
        </button>
      </div>
    </header>
  );
}

export default Header;
