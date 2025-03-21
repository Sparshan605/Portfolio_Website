import { useEffect } from 'react';
import './Styles/App.css';
import Navbar from './component/Nav-bar';
import Herosection from './component/Hero-section';
import '@fontsource/montserrat/700.css';
import Work from './component/Work';
import Projects from './component/Projects';
import Footer from './component/footer';


function App() {
  useEffect(() => {
    document.title = 'Sparshan Koirala';
  }, []);

  return (
    <div className='main'>
      <Navbar />
      <Herosection />
      <div className='main_body'>
      <Work />
      <Projects />
      </div>
      <Footer />
      </div>
  );
}

export default App;

