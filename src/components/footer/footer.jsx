import './footer.css';
import instaLogo from './../../images/footer/instagram.png';
import fbLogo from './../../images/footer/social-media.png';
import xLogo from './../../images/footer/twitter.png';
function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="copyright-text" >Copyright &copy; 2023  by Agrimart</div>
        <div className="footer-socials">
          <a><img src={instaLogo} className="footer-socials-img" /></a>
          <a><img src={fbLogo} className="footer-socials-img" /></a>
          <a><img src={xLogo} className="footer-socials-img" /></a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;