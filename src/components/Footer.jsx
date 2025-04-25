import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>Hakkımızda</h3>
          <p>
            Markamız, estetik ve fonksiyonelliği birleştirerek yaşam alanlarını
            güzelleştirmeyi amaçlar. Her zaman kaliteyi ön planda tutarız.
          </p>
        </div>

        <div className="footer-section">
          <h3>Hızlı Bağlantılar</h3>
          <ul>
            <li>
              <Link to="/">Anasayfa</Link>
            </li>
            <li>
              <Link to="/categories">Kategoriler</Link>
            </li>
            <li>
              <Link to="/contact">İletişim</Link>
            </li>
            <li>
              <Link to="/faq">SSS</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Bizi Takip Edin</h3>
          <ul className="social-links">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-youtube"></i> YouTube
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>İletişim</h3>
          <p>Adres: Moda Caddesi No:5, İstanbul</p>
          <p>Telefon: +90 212 555 55 55</p>
          <p>Email: destek@marka.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Marka Adı. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}

export default Footer;
