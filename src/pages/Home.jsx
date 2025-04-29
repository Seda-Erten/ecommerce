import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../css/Home.css";

function Home() {
  const storyCards = [
    {
      title: "Sustainable Fashion",
      description: "Discover our eco-friendly collection",
      image: "src/images/moda.jpg",
      color: "#4CAF50",
    },
    {
      title: "Technology",
      description: "Products shaping the future",
      image: "src/images/teknoloji.jpg",
      color: "#2196F3",
    },
    {
      title: "Comfort at Home",
      description: "Transform your living spaces",
      image: "src/images/ev.webp",
      color: "#FF9800",
    },
  ];

  const experiences = [
    {
      title: "Personalized Shopping",
      icon: "🛍️",
      description: "Get recommendations just for you",
    },
    {
      title: "Virtual Store Tour",
      icon: "👓",
      description: "Explore the 3D store experience",
    },
    {
      title: "Expert Consultancy",
      icon: "💬",
      description: "Talk to professionals in the field",
    },
  ];

  return (
    <div className="modern-home">
      <section className="interactive-hero">
        <div className="hero-content">
          <h1>
            Redefine Your <span className="highlight">Shopping Experience</span>
          </h1>
          <p className="subtitle">
            Boundary-pushing design, extraordinary products
          </p>
          <div className="hero-actions">
            <Link to="/discover" className="cta-button">
              Discover <FiChevronRight />
            </Link>
            <button className="video-button">▶️ Watch Our Story</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-product" style={{ "--delay": "0s" }}>
            <img src="src/images/teknoloji2.jpg" alt="Product" />
          </div>
          <div className="floating-product" style={{ "--delay": "0.5s" }}>
            <img src="src/images/koltuk-takimi-kategori-2.jpg" alt="Product" />
          </div>
          <div className="floating-product" style={{ "--delay": "1s" }}>
            <img src="src/images/giyim.jpg" alt="Product" />
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
                See Details <FiChevronRight />
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="unique-experiences">
        <h2 className="section-title">
          Unique <span>Experiences</span>
        </h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="exp-icon">{exp.icon}</div>
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
              <Link to={`/experience/${index}`} className="exp-link">
                Try Now <FiChevronRight />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="motion-banner">
        <div className="banner-text">
          <h2>
            Design <span>Focused</span> Living
          </h2>
          <p>Products to transform your daily routine</p>
        </div>
        <div className="banner-scroll">
          <div className="scroll-items">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="scroll-item">
                <img src={`src/images/scroll-${i + 1}.jpg`} alt="Featured" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
