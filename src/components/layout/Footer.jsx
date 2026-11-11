import logo from "../../assets/BantAI Header.svg";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <a href="#home" className="logo">
        <img src={logo} alt="BantAI" />
      </a>
      <p>Same Cameras. Smarter Eyes.</p>
      <span className="copyright">© 2026 BantAI. ALL RIGHTS RESERVED.</span>
    </footer>
  );
}

export default Footer;
