import logo from "../../assets/BantAI Header.svg";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <a href="#home" className="logo">
        <img src={logo} alt="BantAI" />
      </a>
      <p>Same Cameras. Smarter Eyes.</p>
      <div className="footer-contact">
        <span>CONTACT</span>
        <a href="mailto:bantaireports@gmail.com">bantaireports@gmail.com</a>
      </div>
      <span className="copyright">© 2026 BantAI. ALL RIGHTS RESERVED.</span>
    </footer>
  );
}

export default Footer;
