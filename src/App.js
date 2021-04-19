// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import AboutMe from './Components/AboutMe';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {

  const [menuItemSelected, setMenuItemSelected] = useState('About Me');
  const renderPage = (menuItemSelected) =>{
    switch(menuItemSelected){
      case 'About Me':
        return <AboutMe />;
        break;
      case 'Portfolio':
        return <AboutMe />;
        break;
      case 'Contact':
        return <Contact />
        break;
      default: break;
    }
  }
  return (
    <React.Fragment> 
      <Navbar menuItemSelected={menuItemSelected} setMenuItemSelected={setMenuItemSelected} />
      {renderPage(menuItemSelected)}
      <Footer />
    </React.Fragment>
  );
}

export default App;
