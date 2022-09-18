import LinksMenu from "../LinksMenu";
import "./Footer.css";

const Footer = ({ linkItems }) => {
  return (
    <footer className="footer">
      <LinksMenu items={linkItems} />
      <div>
        <img
          className="footer-logo"
          src="/images/logo.png"
          alt="Logo do organo feito pela alura"
        ></img>
      </div>
      <div>
        <p>by arths</p>
      </div>
    </footer>
  );
};

export default Footer;
