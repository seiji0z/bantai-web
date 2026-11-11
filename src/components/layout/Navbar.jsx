import { useState } from "react";
import logo from "../../assets/BantAI Header.svg";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "The Problem", href: "#problem" },
  { label: "Our Solution", href: "#solution" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a href="#home" className="logo" onClick={closeMenu}>
          <img src={logo} alt="BantAI" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span />
          <span />
          <span />
        </button>

        <div
          id="primary-navigation"
          className={`nav-links${isOpen ? " is-open" : ""}`}
        >
          {navigationItems.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </div>

        <a href="#partnership" className="nav-button" onClick={closeMenu}>
          Partner With Us <span>↗</span>
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
