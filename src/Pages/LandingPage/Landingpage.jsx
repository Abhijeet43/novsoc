import React, { useState } from "react";
import "./LandingPage.css";
import hero from "../../assets/hero.svg";
import { Login, Signup } from "../../components";

const LandingPage = () => {
  const [authMode, setAuthMode] = useState("login");
  return (
    <main className="home-section">
      <h1 className="app-title">
        <span className="primary">Nov</span>Soc
      </h1>
      <h2 className="app-sub-desc">
        NovSoc helps you connect and share with the people in your life.
      </h2>
      <section className="home-content">
        <section className="section-hero">
          <img className="hero-img" src={hero} alt="hero" loading="lazy" />
        </section>
        <section className="section-content">
          {authMode === "login" ? (
            <Login setAuthMode={setAuthMode} />
          ) : (
            <Signup setAuthMode={setAuthMode} />
          )}
        </section>
      </section>
    </main>
  );
};

export { LandingPage };
