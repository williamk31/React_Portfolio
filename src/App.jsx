// import { Outlet } from 'react-router-dom';
import { Element } from 'react-scroll';
import Header from './components/Header';
import Footer from './components/Footer';
import '/styles/App.css';
import '/styles/font.css';

import Home from './pages/Home.jsx';
import ContactForm from './pages/Contact.jsx';
// import Error from './pages/Error.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';

function App() {
  return (
    <>
      <Header />
      <Element name="home" className="element">
        <Home />
      </Element>
      <Element name="resume" className="element">
        <Resume />
      </Element>
      <Element name="portfolio" className="element">
        <Portfolio />
      </Element>
      <Element name="contact" className="element">
        <ContactForm />
      </Element>
      
      <Footer />
    </>
  );
}

export default App;
