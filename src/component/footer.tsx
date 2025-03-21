import '/Styles/footer.css'
import insta from '../assets/insta.png';
import gmail from'../assets/gmail.png';
import linkedin from'../assets/linkedin.png';

export default function Footer( )
{
    return(
    <footer className='footer'>
        <div className='footer-content'>
            <a href='https://www.instagram.com/sparshan605/' target="_blank" rel="noopener noreferrer">
            <img src={insta} className='icon2'></img></a>
            <a href='mailto: sparshan144@gmail.com' target="_blank" rel="noopener noreferrer">
            <img src={gmail}  className='icon'></img></a>
            <a href='https://www.linkedin.com/in/sparshan-koirala-73524b2a6/' target="_blank" rel="noopener noreferrer">
            <img src={linkedin}  className='icon1'></img></a>
        <div className='footer-copyright'>
             Copyright &copy; {new Date().getFullYear()} | 2006 Sparshan Koirala. All rights reserved.
        </div>
        </div>
    </footer>
    )
}
