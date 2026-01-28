import { useEffect, useState } from "react";
import "./App.css";
import { translations } from "./translations";
import type { Language } from "./translations";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [qualityModalOpen, setQualityModalOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("sr");

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const openTermsModal = () => {
    setTermsModalOpen(true);
  };

  const closeTermsModal = () => {
    setTermsModalOpen(false);
  };

  const openQualityModal = () => {
    setQualityModalOpen(true);
  };

  const closeQualityModal = () => {
    setQualityModalOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "sr" ? "en" : "sr");
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          <a href="#" className="nav-logo">
            <img src="/omnipay-logo-big.png" alt="OmniPay Solutions" />
          </a>

          <ul className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
            <li>
              <a href="#about" className="nav-link" onClick={closeMobileMenu}>
                {t.nav.about}
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                {t.nav.services}
              </a>
            </li>
            <li>
              <a
                href="#technologies"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                {t.nav.technologies}
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={closeMobileMenu}>
                {t.nav.contact}
              </a>
            </li>
            <li>
              <a
                href="https://servisi.omnipay.rs/index.php"
                className="nav-cta"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
              >
                {t.nav.portal}
              </a>
            </li>
            <li>
              <button
                className="lang-toggle"
                onClick={toggleLanguage}
                aria-label="Toggle language"
              >
                {language === "sr" ? "EN" : "SR"}
              </button>
            </li>
          </ul>

          <button
            className="nav-mobile-toggle"
            aria-label="Toggle menu"
            onClick={toggleMobileMenu}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text animate-fade-in-up">
              <h1>
                {t.hero.title1}
                <br />
                {t.hero.title2}
                <br />
                <span className="highlight">{t.hero.title3}</span>
              </h1>
              <p>{t.hero.description}</p>
              <div className="hero-cta">
                <a
                  href="https://servisi.omnipay.rs/index.php"
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.hero.login}
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                </a>
                <a
                  href="https://servisi.omnipay.rs/registration.php"
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.hero.register}
                </a>
              </div>
            </div>

            <div className="hero-visual animate-fade-in">
              <svg
                className="hero-image"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background glow */}
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="#E6F7FD"
                  opacity="0.4"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="120"
                  fill="#00AAE6"
                  opacity="0.05"
                />

                {/* Main dashboard container - background */}
                <rect
                  x="70"
                  y="80"
                  width="260"
                  height="240"
                  rx="16"
                  fill="white"
                />

                {/* Sidebar - inside container */}
                <rect
                  x="72"
                  y="82"
                  width="48"
                  height="236"
                  rx="14"
                  fill="#E6F7FD"
                />
                <rect
                  x="120"
                  y="82"
                  width="1"
                  height="236"
                  fill="#E2E8F0"
                />

                {/* Main dashboard container - border on top */}
                <rect
                  x="70"
                  y="80"
                  width="260"
                  height="240"
                  rx="16"
                  fill="none"
                  stroke="#00AAE6"
                  strokeWidth="2.5"
                />

                {/* Sidebar icons */}
                <circle cx="95" cy="110" r="8" fill="#00AAE6" />
                <rect x="85" y="135" width="20" height="4" rx="2" fill="#E2E8F0" />
                <rect x="85" y="150" width="20" height="4" rx="2" fill="#E2E8F0" />
                <rect x="85" y="165" width="20" height="4" rx="2" fill="#E2E8F0" />
                <rect x="85" y="180" width="20" height="4" rx="2" fill="#00AAE6" opacity="0.5" />

                {/* Top stats cards */}
                <rect x="135" y="95" width="55" height="40" rx="6" fill="#E6F7FD" />
                <rect x="200" y="95" width="55" height="40" rx="6" fill="#E6F7FD" />
                <rect x="265" y="95" width="55" height="40" rx="6" fill="#00AAE6" opacity="0.15" />

                {/* Stats card content */}
                <rect x="143" y="103" width="25" height="6" rx="3" fill="#E2E8F0" />
                <rect x="143" y="118" width="35" height="10" rx="3" fill="#00AAE6" />

                <rect x="208" y="103" width="25" height="6" rx="3" fill="#E2E8F0" />
                <rect x="208" y="118" width="35" height="10" rx="3" fill="#00AAE6" opacity="0.7" />

                <rect x="273" y="103" width="25" height="6" rx="3" fill="#E2E8F0" />
                <rect x="273" y="118" width="35" height="10" rx="3" fill="#00AAE6" opacity="0.5" />

                {/* Chart area */}
                <rect x="135" y="150" width="120" height="80" rx="8" fill="#E6F7FD" />

                {/* Bar chart */}
                <rect x="150" y="200" width="12" height="20" rx="2" fill="#00AAE6" opacity="0.4" />
                <rect x="170" y="185" width="12" height="35" rx="2" fill="#00AAE6" opacity="0.6" />
                <rect x="190" y="175" width="12" height="45" rx="2" fill="#00AAE6" />
                <rect x="210" y="190" width="12" height="30" rx="2" fill="#00AAE6" opacity="0.7" />
                <rect x="230" y="180" width="12" height="40" rx="2" fill="#00AAE6" opacity="0.8" />

                {/* Chart label */}
                <rect x="145" y="158" width="40" height="5" rx="2" fill="#E2E8F0" />

                {/* Right side panel - Transactions list */}
                <rect x="265" y="150" width="55" height="80" rx="8" fill="#E6F7FD" />

                {/* Transaction items */}
                <rect x="273" y="160" width="40" height="6" rx="2" fill="#E2E8F0" />
                <rect x="273" y="175" width="35" height="6" rx="2" fill="#00AAE6" opacity="0.5" />
                <rect x="273" y="190" width="38" height="6" rx="2" fill="#E2E8F0" />
                <rect x="273" y="205" width="32" height="6" rx="2" fill="#00AAE6" opacity="0.3" />

                {/* Bottom section - Recent activity */}
                <rect x="135" y="245" width="185" height="60" rx="8" fill="#E6F7FD" />

                {/* Activity rows */}
                <circle cx="152" cy="265" r="6" fill="#00AAE6" />
                <rect x="165" y="262" width="60" height="6" rx="2" fill="#E2E8F0" />
                <rect x="280" y="262" width="30" height="6" rx="2" fill="#00AAE6" opacity="0.5" />

                <circle cx="152" cy="285" r="6" fill="#00AAE6" opacity="0.6" />
                <rect x="165" y="282" width="50" height="6" rx="2" fill="#E2E8F0" />
                <rect x="280" y="282" width="25" height="6" rx="2" fill="#00AAE6" opacity="0.3" />

                {/* Shadow filter */}
                <defs>
                  <filter
                    id="shadow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feDropShadow
                      dx="0"
                      dy="4"
                      stdDeviation="8"
                      floodOpacity="0.15"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section section">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <span className="section-label">{t.about.label}</span>
            <h2 className="section-title">{t.about.title}</h2>
          </div>
          <div className="about-content animate-fade-in-up">
            <p className="about-text">{t.about.text1}</p>
            <p className="about-text">{t.about.text2}</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="features section">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <span className="section-label">{t.services.label}</span>
            <h2 className="section-title">{t.services.title}</h2>
            <p className="section-description">{t.services.description}</p>
          </div>

          <div className="features-grid">
            <div
              className="feature-card animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="feature-icon">
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="feature-title">{t.services.webApps.title}</h3>
              <p className="feature-description">
                {t.services.webApps.description}
              </p>
            </div>

            <div
              className="feature-card animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="feature-icon">
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="feature-title">{t.services.mobileApps.title}</h3>
              <p className="feature-description">
                {t.services.mobileApps.description}
              </p>
            </div>

            <div
              className="feature-card animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="feature-icon">
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="feature-title">
                {t.services.digitalization.title}
              </h3>
              <p className="feature-description">
                {t.services.digitalization.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="tech-section section">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <span className="section-label">{t.technologies.label}</span>
            <h2 className="section-title">{t.technologies.title}</h2>
            <p className="section-description">{t.technologies.description}</p>
          </div>

          <div className="tech-grid">
            <div
              className="tech-category animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h3 className="tech-category-title">
                {t.technologies.programmingTitle}
              </h3>
              <div className="tech-tags">
                <span className="tech-tag">PHP</span>
                <span className="tech-tag">.NET (C#, F#)</span>
                <span className="tech-tag">C/C++</span>
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Swift</span>
                <span className="tech-tag">Kotlin</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">Angular</span>
              </div>
            </div>

            <div
              className="tech-category animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="tech-category-title">
                {t.technologies.databasesTitle}
              </h3>
              <div className="tech-tags">
                <span className="tech-tag">Oracle DBMS</span>
                <span className="tech-tag">Microsoft SQL Server</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="partnership-section section">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <span className="section-label">{t.partnership.label}</span>
            <h2 className="section-title">{t.partnership.title}</h2>
          </div>

          <div className="partnership-content animate-fade-in-up">
            <p className="partnership-intro">{t.partnership.intro}</p>
            <ul className="partnership-list">
              <li>{t.partnership.item1}</li>
              <li>{t.partnership.item2}</li>
              <li>{t.partnership.item3}</li>
            </ul>
            <p className="partnership-outro">{t.partnership.outro}</p>
          </div>
        </div>
      </section>

      {/* Cybersecurity Section */}
      <section className="cybersecurity-section section">
        <div className="container">
          <div className="cyber-card animate-fade-in-up">
            <div className="cyber-icon">
              <svg
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h2 className="cyber-title">{t.cybersecurity.title}</h2>
            <p className="cyber-text">{t.cybersecurity.text}</p>
          </div>
        </div>
      </section>

      {/* Portal Access Section */}
      <section className="portal-section section">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <span className="section-label">{t.portal.label}</span>
            <h2 className="section-title">{t.portal.title}</h2>
            <p className="section-description">{t.portal.description}</p>
          </div>

          <div className="portal-grid">
            <div
              className="portal-card animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="portal-card-icon">
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              </div>
              <h3 className="portal-card-title">{t.portal.loginTitle}</h3>
              <p className="portal-card-description">
                {t.portal.loginDescription}
              </p>
              <a
                href="https://servisi.omnipay.rs/index.php"
                className="portal-card-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.portal.loginButton}
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>

            <div
              className="portal-card animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="portal-card-icon">
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
              </div>
              <h3 className="portal-card-title">{t.portal.registerTitle}</h3>
              <p className="portal-card-description">
                {t.portal.registerDescription}
              </p>
              <a
                href="https://servisi.omnipay.rs/registration.php"
                className="portal-card-button portal-card-button-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.portal.registerButton}
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section section">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <span className="section-label">{t.contact.label}</span>
            <h2 className="section-title">{t.contact.title}</h2>
            <p className="section-description">{t.contact.description}</p>
          </div>

          <div className="contact-grid">
            <div
              className="contact-card animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="contact-icon">
                <svg
                  width="32"
                  height="32"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="contact-location">Beograd</h3>
              <p className="contact-address">Černiševskog 2, Beograd</p>
            </div>

            <div
              className="contact-card animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="contact-icon">
                <svg
                  width="32"
                  height="32"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="contact-location">Novi Sad</h3>
              <p className="contact-address">Narodnog fronta 73, Novi Sad</p>
            </div>
          </div>

          <div className="contact-info animate-fade-in-up">
            <div className="contact-item">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span
                style={{ color: "var(--text-secondary)", marginRight: "8px" }}
              >
                {t.contact.email}
              </span>
              <a href="mailto:office@omnipay.rs">office@omnipay.rs</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <a href="#" className="footer-logo">
                <img src="/omnipay-logo-big.png" alt="OmniPay Solutions" />
              </a>
              <p className="footer-description">{t.footer.description}</p>
            </div>

            <div className="footer-column">
              <h4>{t.footer.servicesTitle}</h4>
              <ul className="footer-links">
                <li>
                  <a href="#services">{t.footer.webApps}</a>
                </li>
                <li>
                  <a href="#services">{t.footer.mobileApps}</a>
                </li>
                <li>
                  <a href="#services">{t.footer.digitalization}</a>
                </li>
                <li>
                  <a href="#services">{t.footer.cybersecurity}</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>{t.footer.companyTitle}</h4>
              <ul className="footer-links">
                <li>
                  <a href="#about">{t.footer.aboutUs}</a>
                </li>
                <li>
                  <a href="#technologies">{t.footer.technologies}</a>
                </li>
                <li>
                  <a href="#contact">{t.footer.contact}</a>
                </li>
                <li>
                  <a
                    href="https://servisi.omnipay.rs/index.php"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.footer.portal}
                  </a>
                </li>
                <li>
                  <a
                    href="https://servisi.omnipay.rs/index.php"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.footer.merchantLogin}
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>{t.footer.legalTitle}</h4>
              <ul className="footer-links">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      openTermsModal();
                    }}
                  >
                    {t.footer.termsOfUse}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      openQualityModal();
                    }}
                  >
                    {t.footer.qualityPolicy}
                  </a>
                </li>
              </ul>

              <div className="footer-certificates">
                <img
                  src="/znak_usaglasenosti_9001_27001.png"
                  alt="Compliance Mark"
                />
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">{t.footer.copyright}</p>
            <div className="footer-social">
              <a
                href="https://servisi.omnipay.rs/index.php"
                className="social-link"
                aria-label="Portal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/omnipaysolutions/"
                className="social-link"
                aria-label="LinkedIn"
                target="_blank"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Terms Modal */}
      {termsModalOpen && (
        <div className="modal-overlay" onClick={closeTermsModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeTermsModal}>
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2>{t.termsModal.title}</h2>
            <div className="modal-body">
              <p>{t.termsModal.intro}</p>

              <h3>{t.termsModal.disclaimerTitle}</h3>
              <p>{t.termsModal.disclaimerText}</p>

              <h3>{t.termsModal.copyrightTitle}</h3>
              <p>{t.termsModal.copyrightText}</p>

              <p style={{ marginTop: "24px", fontWeight: "600" }}>
                {t.termsModal.copyrightNotice}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Quality Policy Modal */}
      {qualityModalOpen && (
        <div className="modal-overlay" onClick={closeQualityModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeQualityModal}>
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2>{t.qualityModal.title}</h2>
            <div className="modal-body">
              <p>{t.qualityModal.intro}</p>

              <ul>
                {t.qualityModal.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <p style={{ marginTop: "24px" }}>{t.qualityModal.date}</p>
              <p style={{ fontWeight: "600" }}>
                {t.qualityModal.director}
                <br />
                {t.qualityModal.directorName}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
