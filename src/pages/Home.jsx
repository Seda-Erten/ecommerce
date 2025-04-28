import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../css/Home.css";

function Home() {
  const storyCards = [
    {
      title: "Sürdürülebilir Moda",
      description: "Çevre dostu koleksiyonumuzla tanışın",
      image: "src/images/moda.jpg",
      color: "#4CAF50",
    },
    {
      title: "Teknoloji & Yenilik",
      description: "Geleceği şekillendiren ürünler",
      image: "src/images/teknoloji.jpg",
      color: "#2196F3",
    },
    {
      title: "Evde Keyif",
      description: "Yaşam alanlarınızı dönüştürün",
      image: "src/images/ev.webp",
      color: "#FF9800",
    },
  ];

  const experiences = [
    {
      title: "Kişiselleştirilmiş Alışveriş",
      icon: "🛍️",
      description: "Size özel önerilerle tanışın",
    },
    {
      title: "Sanal Mağaza Turu",
      icon: "👓",
      description: "3D mağaza deneyimini keşfedin",
    },
    {
      title: "Uzman Danışmanlık",
      icon: "💬",
      description: "Alanında uzmanlarla görüşün",
    },
  ];

  return (
    <div className="modern-home">
      <section className="interactive-hero">
        <div className="hero-content">
          <h1>
            Alışveriş <span className="highlight">Deneyiminizi</span> Yeniden
            Tanımlayın
          </h1>
          <p className="subtitle">
            Sınırları zorlayan tasarım, sıra dışı ürünler
          </p>
          <div className="hero-actions">
            <Link to="/discover" className="cta-button">
              Keşfet <FiChevronRight />
            </Link>
            <button className="video-button">▶️ Hikayemizi İzleyin</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-product" style={{ "--delay": "0s" }}>
            <img src="src/images/teknoloji2.jpg" alt="Ürün" />
          </div>
          <div className="floating-product" style={{ "--delay": "0.5s" }}>
            <img src="src/images/koltuk-takimi-kategori-2.jpg" alt="Ürün" />
          </div>
          <div className="floating-product" style={{ "--delay": "1s" }}>
            <img src="src/images/giyim.jpg" alt="Ürün" />
          </div>
        </div>
      </section>

      <section className="story-cards">
        {storyCards.map((card, index) => (
          <div
            key={index}
            className="story-card"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${card.image})`,
              "--accent-color": card.color,
            }}
          >
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <Link to={`/story/${index}`} className="story-link">
                Detaylar <FiChevronRight />
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="unique-experiences">
        <h2 className="section-title">
          Eşsiz <span>Deneyimler</span>
        </h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="exp-icon">{exp.icon}</div>
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
              <Link to={`/experience/${index}`} className="exp-link">
                Hemen Dene <FiChevronRight />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="motion-banner">
        <div className="banner-text">
          <h2>
            Tasarım <span>Odaklı</span> Yaşam
          </h2>
          <p>Günlük rutininizi dönüştürecek ürünler</p>
        </div>
        <div className="banner-scroll">
          <div className="scroll-items">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="scroll-item">
                <img src={`src/images/scroll-${i + 1}.jpg`} alt="Öne çıkan" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
