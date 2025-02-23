import { useEffect } from 'react';
import './App.css';
import Navbar from './component/Nav-bar';
import Herosection from './component/Hero-section';
import '@fontsource/montserrat/700.css';
import Projects from './component/Projects';
import Footer from './component/footer';

function App() {
  useEffect(() => {
    document.title = 'Sparshan Koirala';
  }, []);

  return (
    <div>
      <Navbar />
      <Herosection />
      <Projects />
      <Footer />
      </div>
  );
}

export default App;

