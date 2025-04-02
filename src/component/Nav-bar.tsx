import '../Styles/Nav-bar.css';
import logo from '../assets/logo.png';

function Navbar (){
  return (
    <header className="app-header">
        <a href='#'>
        <img src={logo} alt="Logo" className="logo" />
        </a>
        <span className="portfolio-name">Sparshan Koirala</span>
      {/* <div className="contact-info">
        <a href="#" className="button">Contact Info</a>
      </div> */}
    </header>
  );
}

export default Navbar;